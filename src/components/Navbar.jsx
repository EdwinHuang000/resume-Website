import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-gray-500 flex justify-between items-center min-w-full max-w-[1240px]  mx-auto h-24 pr-2  bg-slate-900">
      <h1
        className={
          nav ? "hidden" : "w-full text-3xl font-bold primary-color ml-4"
        }
      >
        Ziyang Huang
      </h1>
      <div>
        <ul className={nav ? "hidden" : "hidden md:flex"}>
          <li className="p-2 group">
            <a href="#home" className="group-hover:text-white transition-colors duration-300">Home</a>
          </li>
          <li className="p-2 group">
            <a href="#experience" className="group-hover:text-white transition-colors duration-300">Experience</a>
          </li>
          <li className="p-2 group">
            <a href="#work" className="group-hover:text-white transition-colors duration-300">Work</a>
          </li>
          <li className="p-2 group">
            <a href="#about" className="group-hover:text-white transition-colors duration-300">About</a>
          </li>
          <li className="p-2 group">
            <a href="#contact" className="group-hover:text-white transition-colors duration-300">Contact</a>
          </li>
        </ul>
      </div>

      <div onClick={handleNav} className="block ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "text-gray-300 z-10 fixed h-full w-[70%] md:w-[50%] left-0 top-0 bg-gray-900 ease-in-out duration-500 shadow-lg"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-2xl font-bold primary-color p-4 border-b border-gray-700">
          Ziyang Huang
        </h1>
        <ul className="py-2">
          <li className="border-b border-gray-700">
            <a href="#home" className="block py-3 px-4 hover:bg-gray-800 hover:text-white transition-all duration-300">Home</a>
          </li>
          <li className="border-b border-gray-700">
            <a href="#experience" className="block py-3 px-4 hover:bg-gray-800 hover:text-white transition-all duration-300">Experience</a>
          </li>
          <li className="border-b border-gray-700">
            <a href="#work" className="block py-3 px-4 hover:bg-gray-800 hover:text-white transition-all duration-300">Work</a>
          </li>
          <li className="border-b border-gray-700">
            <a href="#about" className="block py-3 px-4 hover:bg-gray-800 hover:text-white transition-all duration-300">About</a>
          </li>
          <li>
            <a href="#contact" className="block py-3 px-4 hover:bg-gray-800 hover:text-white transition-all duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
