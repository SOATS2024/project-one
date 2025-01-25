import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import { useFirebase } from "../context/firebase";
import { Logo } from "../components/Logo";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const firebase = useFirebase();
  const [error, setError] = useState(null);
  const MAX_ATTEMPTS = 3;

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return false;
    }

    if (!email || !password) {
      setError("All fields are required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (loginAttempts >= MAX_ATTEMPTS) {
      setError("Too many failed attempts. Please try again later.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const user = await firebase.signInWithEmail(email, password);
      if (user) {
        setLoginAttempts(0);
        if (rememberMe) {
          localStorage.setItem("rememberedUser", "true");
        } else {
          localStorage.removeItem("rememberedUser");
        }
      }
    } catch (error) {
      setLoginAttempts((prev) => prev + 1);
      console.error("Login error:", error);
      if (error.code === "auth/invalid-credential") {
        setError(
          `Invalid email or password - ${
            MAX_ATTEMPTS - loginAttempts
          } attempts remaining`
        );
      } else {
        setError("Error logging in to your account");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      setLoading(true);
      setError(null);
      const user = await firebase.withGoogle();
      if (user && rememberMe) {
        localStorage.setItem("rememberedUser", "true");
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Error signing in with Google");
    } finally {
      setLoading(false);
    }
  };

  const routetoRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex justify-center items-center bg-background min-h-screen">
      <div className="max-w-md py-6 px-5 w-full rounded-lg shadow-lg bg-white">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3">
            {error}
          </div>
        )}
        <div className="mb-4">
          <h2 className="text-center text-3xl font-bold text-text font-header">
            Welcome Back <br />
            <span className="flex items-center justify-center font-pennywise">
              <Logo height={60} width={60} />
              enny<span className="text-secondary">Wise</span>{" "}
            </span>
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-md shadow-sm space-y-4 m-3">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text font-header"
              >
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
                  disabled={loading || loginAttempts >= MAX_ATTEMPTS}
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 pl-10 pr-4 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 font-content disabled:opacity-50"
                  placeholder="Enter your Email Address"
                />
                <Mail
                  className="absolute inset-y-0 left-0 pl-3 pt-2 flex items-center pointer-events-none h-8 w-8 text-gray-400"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-text font-header"
              >
                Password
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  disabled={loading || loginAttempts >= MAX_ATTEMPTS}
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 pl-10 pr-10 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-content disabled:opacity-50"
                  placeholder="Enter your Password"
                />
                <Lock
                  className="absolute inset-y-0 items-center flex left-0 pl-3 pt-2 h-8 w-8 pointer-events-none text-gray-400"
                  strokeWidth={1.5}
                />
                <button
                  type="button"
                  disabled={loading || loginAttempts >= MAX_ATTEMPTS}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye strokeWidth={1.5} />
                  ) : (
                    <EyeOff strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-text font-header"
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                disabled={loading}
                className="text-secondary underline hover:cursor-pointer hover:text-hover_secondary font-header"
              >
                Forgot Password?
              </button>
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={loading || loginAttempts >= MAX_ATTEMPTS}
                className={`bg-secondary w-full text-white font-medium rounded-md py-2 hover:bg-hover_secondary font-header ${
                  loading || loginAttempts >= MAX_ATTEMPTS
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin inline mr-2" />
                    Logging in...
                  </>
                ) : loginAttempts >= MAX_ATTEMPTS ? (
                  "Too many attempts"
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
        </form>
        <div className="flex justify-center items-center px-3">
          <span className="h-[1px] w-full bg-gray-300 rounded-md"></span>
          <span className="mx-2 font-header">Or</span>
          <span className="h-[1px] w-full bg-gray-300 rounded-md"></span>
        </div>
        <div className="m-3">
          <button
            onClick={handleGoogle}
            disabled={loading || loginAttempts >= MAX_ATTEMPTS}
            className={`w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
              loading || loginAttempts >= MAX_ATTEMPTS
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="font-content">
              {loading ? "Connecting..." : "Continue with Google"}
            </span>
          </button>
        </div>
        <div className="flex mx-3 mt-3 space-x-1 justify-center font-header">
          <div className="font-semibold">Don&apos;t have an account?</div>
          <button
            type="button"
            disabled={loading}
            className="text-secondary font-bold hover:text-hover_secondary"
            onClick={routetoRegister}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export { Login };
