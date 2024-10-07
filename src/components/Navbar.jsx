import logo from "../assets/nkc.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="z-[2] mb-10 flex flex-wrap items-center justify-between py-4 px-4">
      {/* Logo Section */}
      <div className="flex-shrink-0 items-center">
        <img className="mx-2 w-[8rem] sm:w-[10rem] z-[2]" src={logo} alt="logo" />
      </div>

      {/* Icons Section */}
      <div className="mt-4 sm:mt-0 flex flex-wrap items-center justify-center gap-4 text-2xl sm:text-3xl">
        <a href="https://www.linkedin.com/in/nechar-kc-660358299/" >
          <FaLinkedin className="hover:text-blue-500" />
        </a>
        <a href="https://github.com/SpeedRelativity" >
          <FaGithub className="hover:text-gray-500" />
        </a>
        <a href="https://www.instagram.com/totallyseriousname" >
          <FaInstagram className="hover:text-pink-500" />
        </a>
        <a href="https://x.com/Nechar_" >
          <FaTwitterSquare className="hover:text-blue-400" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
