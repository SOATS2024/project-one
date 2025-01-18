import Navbar from "../components/Navbar";

import CT from "../components/CT";

import { ArrowRightIcon, PiggyBank } from "lucide-react";

import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="min-h-screen bg-background">
      <Navbar isWelcome={true} />
      <div className="flex flex-row px-3 py-12">
        <div className="flex flex-col w-[45%] pl-6 animate-slideUp">
          <div className="text-6xl font-extrabold font-header">
            Take control of your
          </div>
          <div className="text-6xl font-extrabold mt-1 text-secondary font-header">
            financial future
          </div>
          <div className="mt-3 text-gray-600 text-xl font-content">
            PennyWise helps you track your daily expenses effortlessly, giving
            you clear insights into your spending habits. Spend smart, save
            better!
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex bg-secondary px-14 py-5 rounded-md font-bold text-white hover:bg-hover_secondary font-content"
              onClick={handleSignUp}
            >
              Get Started
              <span className="ml-2">
                <ArrowRightIcon />
              </span>
            </button>
          </div>
        </div>
        <div className="">{/* This div will hold the animation */}</div>
      </div>
      <div className="flex bg-white h-full mt-3 shadow-md">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mx-4 p-7">
            <CT
              icon={PiggyBank}
              title="Smart Budgeting!"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis autem maxime quo, quasi iure eaque voluptatem ab accusamus nemo earum, nam dolorum. Ad ipsam aspernatur ipsa sunt, illum blanditiis!"
            />
            <CT
              icon={PiggyBank}
              title="Smart Budgeting!"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis autem maxime quo, quasi iure eaque voluptatem ab accusamus nemo earum, nam dolorum. Ad ipsam aspernatur ipsa sunt, illum blanditiis!"
            />
            <CT
              icon={PiggyBank}
              title="Smart Budgeting!"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis autem maxime quo, quasi iure eaque voluptatem ab accusamus nemo earum, nam dolorum. Ad ipsam aspernatur ipsa sunt, illum blanditiis!"
            />
          </div>
          <div className="mt-3 items-center">
            <div className="border border-gray-200"></div>
          </div>
          <div className="mt-5 px-4 flex text-lg font-bold font-pennywise">
            <span>PennyWise</span>
          </div>
          <div className="mt-6 items-center">
            <div className="border border-gray-200"></div>
          </div>
          <div className="flex justify-center text-gray-400 py-4 font-content">
            <span>© 2025 PennyWise. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
