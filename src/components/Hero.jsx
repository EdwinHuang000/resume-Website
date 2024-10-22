import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import profilepic from "../assets/profile.png";

const Hero = () => {
  return (
    <div id="home" className="">
      <div className=" max-w-[1200px] h-[80vh] mx-auto sm:flex-row flex flex-col-reverse justify-center align-center p-6">
        <div className=" flex-col my-auto mx-auto text-8xl">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">
            Hi I am Ziyang Huang
          </p>
          <h1 className="md:text-3xl sm:text-2xl text-4xl font-bold md:py-6 ">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Front-End Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-start">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500 justify-start ">
              With a 1+year experience
            </p>
          </div>
          <div className="text-5xl flex justify-start gap-16 text-purple-600">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillInstagram />
          </div>
          <a href="/src/assets/Resume HuangZiyang general.pdf">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="  text-sm px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Download CV
              </div>
            </button>
          </a>
        </div>
        <div className="my-auto">
          <img
            className="w-[200px] sm:w-[300px] mx-auto h-auto rounded-full"
            src={profilepic}
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
