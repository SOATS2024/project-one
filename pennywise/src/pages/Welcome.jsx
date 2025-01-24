import { Navbar } from "../components/Navbar";

import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Glint } from "../components/Glint";
import Features from "../components/FeaturesSection";

const Welcome = () => {
  const navigate = useNavigate();

  const routetoRegister = () => {
    navigate("/register");
  };
  return (
    <div className="min-h-screen bg-background dark:bg-dark_background">
      <Navbar isWelcome={true} />
      <section id="" className="mx-auto container">
        <div className="flex sm:flex-col flex-row h-[90vh] flex-wrap items-center justify-center px-3 py-12 gap-4">
          <div className="flex flex-col w-[45%] pl-6 animate-slideUp">
            <div className="text-4xl sm:text-6xl">
              <div className="font-extrabold dark:text-gray-200 font-header">
                Take control of your
              </div>
              <div className="font-extrabold mt-1 text-secondary dark:text-dark_secondary font-header">
                financial future
              </div>
            </div>
            <div className="mt-3 text-gray-600 dark:text-gray-400  text-base sm:text-xl font-content">
              PennyWise helps you track your daily expenses effortlessly, giving
              you clear insights into your spending habits. Spend smart, save
              better!
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex bg-secondary dark:bg-dark_secondary px-14 py-5 rounded-md font-bold text-white dark:text-gray-200 hover:bg-hover_secondary dark:hover:bg-dark_hover_secondary font-content"
                onClick={routetoRegister}
              >
                Start Tracking
                <span className="ml-2">
                  <ArrowRightIcon />
                </span>
              </button>
            </div>
          </div>
          <div className="w-[55%] h-full relative items-center justify-center">
            <div className="">
              <div className="">
                {/* Top right coin */}
                <div className="">
                  <div className="absolute right-[80px] custom_brp5:right-[160px] custom_brp4:right-[300px] custom_brp3:right-[400px] custom_brp2:right-[500px] custom_brp1:right-[600px] top-1 transform rotate-45 animate-fadeIn">
                    <Logo isLogo={false} height={150} width={150} />
                  </div>
                  <div className="absolute right-[70px] custom_brp5:right-[150px] custom_brp4:right-[290px] custom_brp3:right-[390px] custom_brp2:right-[490px] custom_brp1:right-[590px] top-[-10px] ">
                    <Glint height={100} width={100} delay="1s" />
                  </div>
                </div>

                {/* Middle right coin */}
                <div className="">
                  <div className="absolute right-[80px] custom_brp5:right-[150px] custom_brp4:right-[200px] custom_brp3:right-[250px] custom_brp2:right-[350px] custom_brp1:right-[450px] top-[275px] custom_brp5:top-[235px] custom_brp4:top-[195px] custom_brp3:top-[145px] transform -rotate-45 animate-fadeIn">
                    <Logo isLogo={false} height={110} width={110} />
                  </div>
                  <div className="absolute right-[80px] custom_brp5:right-[155px] custom_brp4:right-[205px] custom_brp3:right-[255px] custom_brp2:right-[355px] custom_brp1:right-[450px] top-[272px] custom_brp5:top-[232px] custom_brp4:top-[192px] custom_brp3:top-[142px]">
                    <Glint height={60} width={60} delay="2s" />
                  </div>
                </div>

                {/* Bottom right coin */}
                <div className="">
                  <div className="absolute right-[0px] custom_brp4:right-[50px] custom_brp2:right-[150px] custom_brp1:right-[250px] top-[140px] custom_brp5:top-[105px] custom_brp4:top-[45px] transform rotate-12 animate-fadeIn">
                    <Logo isLogo={false} height={130} width={130} />
                  </div>
                  <div className="absolute right-[-5px] custom_brp4:right-[45px] custom_brp2:right-[145px] custom_brp1:right-[245px] top-[125px] custom_brp5:top-[95px] custom_brp4:top-[35px] animate-fadeIn">
                    <Glint height={80} width={80} delay="1.5s" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />

      <section id="about">
        <div className="">
          <h2>About This Website</h2>
          <p>
            PennyWise is your go-to expense tracker designed to simplify money
            management. Whether you are budgeting for the week or planning for
            the year, our intuitive platform helps you stay on top of your
            finances with ease.
          </p>
        </div>
      </section>
      <div className="flex bg-white h-screen mt-3 shadow-md w-full">
        <div className="flex flex-col">
          <div className="mt-3 items-center">
            <div className="border border-gray-200"></div>
          </div>
          <div className="mt-5 px-4 flex text-lg font-bold font-pennywise"></div>
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

export { Welcome };
