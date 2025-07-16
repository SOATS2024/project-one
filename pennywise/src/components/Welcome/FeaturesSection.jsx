import { ContentTile } from "../ContentTile";
import { PiggyBank, CalendarDays, ShieldCheck } from "lucide-react";
import { Logo } from "../Logo";
import featuresImage from "../../assets/features_image.jpg";

const Features = () => {
  return (
    <section className="bg-white dark:bg-slate-950 mx-auto container px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 shadow-md">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/3 rounded-mg overflow-hidden">
          <img
            src={featuresImage}
            alt="Features Image"
            className="h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover rounded-3xl shadow-lg"
          />
        </div>
        <div className="w-full lg:w-2/3 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-dark_primary flex flex-wrap justify-center lg:justify-start items-center gap-2">
            What{" "}
            <div className="inline-flex items-center justify-center font-pennywise">
              <span className="flex items-center justify-center">
                <Logo height={50} width={50}  />
              </span>
              enny
              <span className="text-secondary dark:text-dark_secondary">
                Wise
              </span>{" "}
            </div>
            Offers
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto lg:mx-0">
            With PennyWise, you can easily manage your finances, stay on top of your spending, and achieve your financial goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12">
            <ContentTile
              icon={CalendarDays}
              title="Daily, Weekly, Monthly Tracking"
              description="Monitor your expenses on a daily, weekly, and monthly basis to understand where your money goes and adjust accordingly."
            />
            <ContentTile
              icon={PiggyBank}
              title="Smart Budgeting!"
              description="Track your expenses and gain insights into your spending patterns. PennyWise categorizes your expenses and helps you make informed financial decisions."
            />
            <ContentTile
              icon={ShieldCheck}
              title="Secure & Private"
              description="Your financial data is securely stored and protected, ensuring your privacy is our top priority."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };
