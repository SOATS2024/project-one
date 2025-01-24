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
      id=""
      className="mx-0 md:mx-auto container flex flex-col md:flex-row h-[90vh]  items-center justify-center  px-3 py-12 gap-4"
    >
      <div className="flex flex-col w-md:[45%] pl-6 animate-slideUp sm:w-full flex-wrap items-start justify-center w-1/2">
        <div className="text-4xl sm:text-6xl">
          <div className="font-extrabold font-header">Take control of your</div>
          <div className="font-extrabold mt-1 text-secondary font-header">
            financial future
          </div>
        </div>
        <div className="mt-3 text-gray-600 text-base sm:text-xl font-content">
          PennyWise helps you track your daily expenses effortlessly, giving you
          clear insights into your spending habits. Spend smart, save better!
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex bg-secondary px-14 py-5 rounded-md font-bold text-white hover:bg-hover_secondary font-content text-nowrap"
            onClick={routetoRegister}
          >
            Start Tracking
            <span className="ml-2">
              <ArrowRightIcon />
            </span>
          </button>
        </div>
      </div>
      <div className="w-[55%] h-full relative items-center justify-center hidden md:flex">
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
    </section>
  );
};

export { HeroSection };
