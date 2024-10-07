import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; 

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-4xl sm:text-5xl lg:text-6xl font-thin tracking-tight text-center lg:text-left lg:mt-16"
            >
              Nechar KC
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-lg sm:text-xl lg:text-2xl tracking-tight text-transparent text-center lg:text-left"
            >
              Curious, Driven, Entrepreneurial
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="technologies"
                smooth={true}
                offset={-100}
                duration={500}
              >
                <button className="mt-4 px-4 py-2 sm:px-6 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Take a Look
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
          <div className="flex justify-center">
            <motion.img
              variants={container(0.5)}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl w-48 h-48 sm:w-56 sm:h-56 lg:w-auto lg:h-auto"
              src={profilePic}
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
