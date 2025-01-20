import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
const Navbar = ({ isWelcome }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex flex-row bg-white justify-between px-5 pb-5 pt-3 shadow-md">
      <div className="flex flex-row items-center justify-center">
        <Logo height={60} width={60} />
        <div className="font-pennywise text-3xl font-bold">
          enny<span className="text-secondary">Wise</span>
        </div>
      </div>
      {isWelcome ? (
        <button
          type="button"
          className="bg-white px-4 py-1.5 rounded-md text-primary border-2 border-primary text-base font-medium hover:bg-background font-content"
          onClick={handleLogin}
        >
          Login
        </button>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Navbar;
