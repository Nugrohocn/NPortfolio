import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import HeroSection from "../layouts/HeroSection";
import Experience from "../layouts/Experience";
import Showcase from "../layouts/Showcase";
import Stack from "../layouts/Stack";
import Navigation from "../layouts/Navigation";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

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
      {/* <div className="left-10 top-10 w-full fixed flex justify-start ">
        <label className="inline-flex items-center cursor-pointer">
          <Sun className="h-6 w-6 text-white" />
          <input type="checkbox" value="" className="sr-only peer" />
          <div
            className={`relative w-11 h-6 bg-gray-200 rounded-full  dark:bg-gray-700  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  dark:peer-focus:ring-blue-800  peer peer-checked:after:translate-x-full 
      rtl:peer-checked:after:-translate-x-full 
      peer-checked:after:border-white 
      peer-checked:bg-primary
      after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
      after:bg-white after:border-gray-300 after:border after:rounded-full 
      after:h-5 after:w-5 after:transition-all 
      dark:border-gray-600
      mx-2 // Menambahkan margin antara ikon dan toggle`}
          ></div>
          <Moon className="h-6 w-6 text-white" />
        </label>
      </div> */}
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
