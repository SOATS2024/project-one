import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, PersonStanding, User } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center bg-background min-h-screen overflow-y-hidden">
      <div className="max-w-md py-6 px-5 w-full rounded-lg shadow-lg bg-white">
        <div>
          <h2 className=" text-center text-3xl font-bold text-text">
            Sign Up for <span className="font-pennywise">PennyWise</span>
          </h2>
        </div>
        <form className="space-y-6">
          <div className="rounded-md shadow-sm space-y-4 m-3">
            <div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-text"
                >
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    className="mt-1 mb-4 appearance-none rounded-md relative block w-full px-3 py-2 pl-10 pr-4 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="Enter your Full Name"
                  />
                  <User
                    className="absolute inset-y-0 pt-2 pl-3 h-8 w-8 pointer-events-none left-0 text-gray-400"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 pl-10 pr-4 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="Enter your Email Address"
                  />
                  <Mail
                    className="absolute inset-y-0 pt-2 pl-3 h-8 w-8 pointer-events-none left-0 text-gray-400"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-text"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 pl-10 pr-10 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Enter your Password"
                />
                <Lock
                  className="absolute inset-y-0 left-0 flex items-center pt-2 pl-3 h-8 w-8 text-gray-400 pointer-events-none"
                  strokeWidth={1.5}
                />
                <button
                  type="button"
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
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-text"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showCPassword ? "text" : "password"}
                  name="cpassword"
                  id="cpassword"
                  required
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 pl-10 pr-10 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Confirm Password"
                />
                <Lock
                  className="absolute inset-y-0 left-0 flex items-center pt-2 pl-3 h-8 w-8 text-gray-400 pointer-events-none"
                  strokeWidth={1.5}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
                  onClick={() => setShowCPassword(!showCPassword)}
                >
                  {showCPassword ? (
                    <Eye strokeWidth={1.5} />
                  ) : (
                    <EyeOff strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex pt-4">
              <button className="bg-secondary w-full text-white font-medium rounded-md py-2 hover:bg-hover_secondary">
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-row justify-center items-center px-3">
          <span className="h-[1px] w-full bg-gray-300 rounded-lg"></span>
          <span className="mx-3">Or</span>
          <span className="h-[1px] w-full bg-gray-300 rounded-lg"></span>
        </div>
        <div className="m-3">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ">
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
            Sign in with Google
          </button>
        </div>
        <div className="flex mx-3 mt-5 space-x-1 justify-center">
          <div className="font-semibold">Already have an account?</div>
          <button
            type="button"
            className="text-secondary font-bold hover:text-hover_secondary"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
