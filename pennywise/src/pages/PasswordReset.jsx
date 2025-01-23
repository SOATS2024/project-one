import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFirebase } from "../context/firebase";
import { Mail } from "lucide-react";
import Logo from "../components/Logo";
import Modal from "../components/Modal";

const PasswordReset = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const firebase = useFirebase();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format");
            setLoading(false);
            return;
        }

        try {
            await firebase.forgotPassword(email);
            setShowModal(true);
        } catch (error) {
            console.error("Error:", error);
            setError("Failed to send password reset email");
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/login');
    };

    return (
    <div className="flex justify-center items-center bg-background min-h-screen">
      <div className="max-w-md py-6 px-5 w-full rounded-lg shadow-lg bg-white"></div>
            {/* Success Modal */}
            <div className="flex justify-center items-center bg-background min-h-screen">
                <Modal
                isOpen={showModal}
                onClose={handleCloseModal}
                title="Success!"
                message="Password reset email has been sent successfully. Please check your inbox."
                buttonText="Go to Login"
                />

            {/* Form content */}
            <div className="max-w-md py-6 px-5 w-full rounded-lg shadow-lg bg-white">
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3">
                        {error}
                    </div>
                )}
                <div className="mb-4">
                    <h2 className="text-center text-3xl font-bold text-text font-header">
                        <span className="flex items-center justify-center font-pennywise">
                            <Logo height={60} width={60} />
                            Penny<span className="text-secondary">Wise</span>{" "}
                        </span>
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="rounded-md shadow-sm space-y-4 m-3">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text font-header">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    disabled={loading}
                                    className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 pl-10 pr-4 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 font-content disabled:opacity-50"
                                    placeholder="Enter your Email Address"
                                />
                                <Mail
                                    className="absolute inset-y-0 left-0 pl-3 pt-2 flex items-center pointer-events-none h-8 w-8 text-gray-400"
                                    strokeWidth={1.5}
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-secondary w-full text-white font-medium rounded-md py-2 hover:bg-hover_secondary font-header ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Sending...' : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export { PasswordReset };