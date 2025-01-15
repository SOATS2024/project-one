import Navbar from "../components/Navbar";
import welcomeImage from "../assets/welcome_img.png";

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
        <div className="flex flex-col">
          <div className="text-4xl font-extrabold">Take control of your</div>
          <div className="text-4xl font-extrabold mt-1 text-secondary">
            financial future
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
