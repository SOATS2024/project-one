import Navbar from "../components/Navbar";
import ContentTile from "../components/ContentTile";
import welcomeImage from "../assets/welcome_img.png";
import { ArrowRightIcon } from "lucide-react";

import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex flex-row px-3 py-12">
        <div className="flex flex-col w-[45%]">
          <div className="text-6xl font-extrabold">Take control of your</div>
          <div className="text-6xl font-extrabold mt-1 text-secondary">
            financial future
          </div>
          <div className="mt-3 text-gray-600 text-xl">
            PennyWise helps you track your daily expenses effortlessly, giving
            you clear insights into your spending habits. Spend smart, save
            better!
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex bg-secondary px-14 py-5 rounded-md font-bold text-white hover:bg-hover_secondary"
              onClick={handleSignUp}
            >
              Sign Up
              <span className="ml-2">
                <ArrowRightIcon />
              </span>
            </button>
          </div>
        </div>
        <div className="">{/* This div will hold the animation */}</div>
      </div>
      <div className="flex bg-white h-full mt-5 shadow-md">
        <div className="mt-7 justify-between">
          <ContentTile />
          <div className="mt-10 items-center">
            <div className="border border-gray-200"></div>
          </div>
          <div className="mt-5 px-4 flex text-lg font-medium font-pennywise">
            <span>PennyWise</span>
          </div>
          <div className="mt-6 items-center">
            <div className="border border-gray-200"></div>
          </div>
          <div className="flex justify-center text-gray-400 py-4">
            <span>© 2025 PennyWise. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
