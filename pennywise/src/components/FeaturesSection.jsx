import { ContentTile } from "../components/ContentTile";
import { PiggyBank, CalendarDays, ShieldCheck } from "lucide-react";

const Features = () => {
  return (
    <section className="bg-white mx-auto container px-6 md:px-12 lg:px-20 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
          <img
            src="../../public/assets/features_image.jpg"
            alt="features image"
            className="md:h-[450px] w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Penny<span className="text-primary">Wise</span> Offers
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto md:mx-0">
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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

export default Features;
