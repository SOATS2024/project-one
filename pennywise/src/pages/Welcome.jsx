import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/Welcome/HeroSection";
import { Features } from "../components/Welcome/FeaturesSection";
import { AboutSection } from "../components/Welcome/AboutSection";
import { FooterSection } from "../components/Welcome/FooterSection";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-dark_background transition-colors duration-300">
      <Navbar isWelcome={true} />
      <HeroSection />
      <Features />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export { Welcome };
