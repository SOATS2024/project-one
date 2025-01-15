import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center bg-background min-h-screen">
      <div className="max-w-md py-6 px-5 w-full rounded-lg shadow-lg bg-white">
        <div>
          <h2 className=" text-center text-3xl font-bold text-text">
            Sign Up for <span className="font-pennywise">PennyWise</span>
          </h2>
        </div>
        <form className="space-y-6">
          <div className="rounded-md shadow-sm space-y-4 m-3">
            <div>
              <div className="flex flex-row space-x-3 my-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-text"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first"
                    id="first"
                    required
                    className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your First Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-text"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last"
                    id="last"
                    required
                    className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your Last Name"
                  />
                </div>
              </div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your Email Address"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-text"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Password"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-text"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                required
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-text focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm Password"
              />
            </div>

            <div className="flex pt-4">
              <button className="bg-secondary w-full text-white font-medium rounded-md py-2 hover:bg-purple-700">
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
            className="text-secondary font-bold hover:text-purple-700"
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
