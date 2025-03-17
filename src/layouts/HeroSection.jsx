import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiCloudDownload } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import TrueFocus from "../components/TrueFocus";
import BlurText from "../components/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen ">
      <div
        id="home"
        className=" mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-5 px-5 text-center lg:text-left"
      >
        {/* Bagian Deskripsi */}
        <div className="w-full lg:w-1/2 text-primary mb-10 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-semibold text-white">
            Hello I'm 👋
          </h1>

          <span
            className="inline-block text-3xl lg:text-5xl text-primary bg-pink mt-4"
            style={{ wordSpacing: "-2px" }}
          >
            <BlurText
              text="Nur Cahyo Nugroho"
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-[2.70rem] font-bold "
            />
          </span>
          <h2 className="text-sm lg:text-lg mt-4 text-white">
            Undergraduate Informatics Engineering <br />
            <span className="text-primary text-lg font-semibold">
              Universitas Duta Bangsa Surakarta
            </span>
          </h2>

          <p className="text-sm  lg:text-base text-white max-w-xl mt-4">
            I'm passionate about creating innovative solutions and exploring new
            technologies. Welcome to my
            <span className="font-bold text-primary"> Portfolio</span> – a
            showcase of my journey, skills, and projects.
          </p>

          {/* Media Sosial */}
          <div className="flex items-center justify-center lg:justify-start mt-5 gap-2 flex-wrap">
            <a
              href="https://www.linkedin.com/in/nur-cahyo-nugroho-bb9171259/"
              className="w-8 h-8 lg:w-9 lg:h-9 rounded-full flex justify-center text-primary items-center border border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/Nugrohocn"
              className="w-8 h-8 lg:w-9 lg:h-9 rounded-full flex justify-center text-primary items-center border border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://drive.google.com/file/d/1GEmGdbr95Q7z0e3IYPZyj9HPxVmcQNtu/view?usp=sharing"
              className="w-35 lg:w-48 h-9 rounded-full flex justify-center text-primary items-center border border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-3 lg:mr-4 text-xs lg:text-sm">
                Download CV
              </span>
              <BiCloudDownload className="text-xl lg:text-2xl" />
            </a>
            <a
              href="mailto:nugrohocn6@gmail.com"
              className="w-30 lg:w-30 h-9 rounded-full flex justify-center text-primary items-center border border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-3 lg:mr-4 text-xs lg:text-sm">Email</span>
              <HiOutlineMail className="text-xl lg:text-2xl" />
            </a>
          </div>
        </div>

        {/* Bagian Gambar */}
        <div className="flex w-full lg:w-1/2 justify-center items-center">
          <div className="relative flex justify-center items-center">
            <div className="absolute w-40 h-40 lg:w-64 lg:h-64 rounded-full border-4 border-dashed border-primary animate-spin duration-900"></div>
            <img
              src="img/nug.png"
              alt="nug"
              className="w-40 h-40 lg:w-60 lg:h-60 object-contain filter  relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
