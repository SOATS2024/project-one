import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import PropTypes from "prop-types";

const Navbar = ({ isWelcome }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  return (
    <div className="flex flex-row bg-white dark:bg-slate-950  dark:bg- justify-between px-5 pb-5 pt-3 shadow-md">
      <div className="flex flex-row items-center justify-center">
        <Logo height={60} width={60} />
        <div className="font-pennywise text-text dark:text-gray-200 text-3xl font-bold">
          enny
          <span className="text-secondary dark:text-dark_secondary">Wise</span>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <button
          type="button"
          className="px-4 py-1.5 rounded-md text-primary dark:text-dark_primary text-base font-medium hover:text-hover_secondary dark:hover:text-dark_hover_secondary font-content"
          onClick={handleContactUs}
        >
          Contact Us
        </button>
        {isWelcome && (
          <button
            type="button"
            className="bg-white dark:bg-slate-950 px-4 py-1.5 rounded-md text-primary dark:text-dark_primary border-2 border-primary dark:border-dark_primary  text-base font-medium hover:bg-background dark:hover:bg-slate-950 dark:hover:border-dark_hover_secondary dark:hover:text-dark_hover_secondary font-content"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
Navbar.propTypes = {
  isWelcome: PropTypes.bool,
};

export { Navbar };
