import Login from "../pages/Login.jsx";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex flex-row bg-white   justify-between px-5 pb-5 pt-3 shadow-md">
      <div className="font-pennywise text-2xl">PennyWise</div>
      <button
        type="button"
        className="bg-secondary px-4 py-1.5 rounded-md text-white text-base font-medium hover:bg-hover_secondary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
