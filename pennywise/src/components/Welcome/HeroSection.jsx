import { ArrowRightIcon } from "lucide-react";
import { Logo } from "../Logo";
import { Glint } from "../Glint";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const routetoRegister = () => {
    navigate("/register");
  };
  return (
    <section
      className="mx-auto container flex flex-col md:flex-row min-h-[90vh] items-center justify-center px-4 sm:px-6 py-8 sm:py-12 gap-6 md:gap-4 overflow-hidden"
    >
      {/* Left Content Section */}
      <div className="flex flex-col w-full md:w-1/2 animate-slideUp items-start justify-center px-2 sm:px-4 md:px-6 order-2 md:order-1 mt-8 md:mt-0">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <div className="font-extrabold font-header dark:text-gray-200">
            Take control of your
          </div>
          <div className="font-extrabold mt-1 text-secondary dark:text-dark_secondary font-header">
            financial future
          </div>
        </div>
        <div className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-content dark:text-gray-400 max-w-xl">
          PennyWise helps you track your daily expenses effortlessly, giving you
          clear insights into your spending habits. Spend smart, save better!
        </div>
        <div className="mt-5 sm:mt-8">
          <button
            type="button"
            className="inline-flex items-center bg-secondary px-6 sm:px-10 md:px-14 py-3 sm:py-4 md:py-5 rounded-md font-bold text-white hover:bg-hover_secondary transition-colors duration-300 font-content text-sm sm:text-base md:text-lg"
            onClick={routetoRegister}
          >
            Start Tracking
            <span className="ml-2">
              <ArrowRightIcon size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </span>
          </button>
        </div>
      </div>

      {/* Right Coin Animation Section */}
      <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-full relative flex items-center justify-center order-1 md:order-2">
        {/* Mobile Coin (visible only on small screens) */}
        <div className="block md:hidden absolute left-1/2 transform -translate-x-1/2 animate-fadeIn">
          <Logo isLogo={false} height={180} width={180} />
          <div className="absolute top-[-10px] left-[-10px]">
            <Glint height={80} width={80} delay="1s" />
          </div>
        </div>

        {/* Desktop Coins (hidden on mobile) */}
        <div className="hidden md:block w-full h-full">
          {/* Top right coin */}
          <div className="absolute right-[80px] custom_brp5:right-[160px] custom_brp4:right-[300px] custom_brp3:right-[400px] custom_brp2:right-[500px] custom_brp1:right-[600px] top-1 transform rotate-45 animate-fadeIn">
            <Logo isLogo={false} height={150} width={150} />
            <div className="absolute right-[-10px] top-[-10px]">
              <Glint height={100} width={100} delay="1s" />
            </div>
          </div>

          {/* Middle right coin */}
          <div className="absolute right-[80px] custom_brp5:right-[150px] custom_brp4:right-[200px] custom_brp3:right-[250px] custom_brp2:right-[350px] custom_brp1:right-[450px] top-[275px] custom_brp5:top-[235px] custom_brp4:top-[195px] custom_brp3:top-[145px] transform -rotate-45 animate-fadeIn">
            <Logo isLogo={false} height={110} width={110} />
            <div className="absolute right-[5px] top-[-3px]">
              <Glint height={60} width={60} delay="2s" />
            </div>
          </div>

          {/* Bottom right coin */}
          <div className="absolute right-[0px] custom_brp4:right-[50px] custom_brp2:right-[150px] custom_brp1:right-[250px] top-[140px] custom_brp5:top-[105px] custom_brp4:top-[45px] transform rotate-12 animate-fadeIn">
            <Logo isLogo={false} height={130} width={130} />
            <div className="absolute right-[-5px] top-[-15px]">
              <Glint height={80} width={80} delay="1.5s" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
