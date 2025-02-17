import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import HeroSection from "../layouts/HeroSection";
import Experience from "../layouts/Experience";
import Showcase from "../layouts/Showcase";
import Stack from "../layouts/Stack";
import Navigation from "../layouts/Navigation";

const Homepage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="">
      <HeroSection />
      <Experience />
      <Showcase />
      <Stack />
      {/* <Navigation /> */}
      <div className="w-[870px] border-t border-gray-500 my-5 mx-auto"></div>
      <p className="text-sm text-white text-center px-4 mb-10">
        Copyright © {new Date().getFullYear()} Nur Cahyo Nugroho
      </p>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-3 right-3 md:bottom-6 md:right-6 bg-primary text-black p-3 rounded-full shadow-md transition-all duration-300 hover:bg-opacity-80"
        >
          <FaArrowUp size={15} />
        </button>
      )}
    </div>
  );
};

export default Homepage;
