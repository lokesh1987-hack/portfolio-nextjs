"use client";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transistion: {
      duration: 0.7,
      staggerChilderen: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={"/liladhar_image.jpg"}
              height={650}
              alt="Image"
              className="border border-stone-900 rounded-3xl w-[80%] md:w-[60%]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, deplay: 1.5 }}
            />
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-1/2 lg:pt-16 "
        >
          <div className="flex flex-col items-center lg:items-start mt-10 ps-4">
            <motion.h2
              variants={childVariants}
              className="pb-2 text-3xl tracking-tighter lg:text-7xl "
            >
              Liladhar Harode
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text
                             text-2xl tracking-tight text-transparent
                            "
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 text-center lg:text-start max-w-2xl py-6 text-lg lg:text-2xl leading-relaxed tracking-tighter
                            bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text
                              text-transparent
                            "
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/Liladhar_Harode(3_YOE).pdf"
              target="_blank"
              rel="noopener noreffer"
              whileHover={{ scale: 1.2 }}
              download
              className="bg-white hover:bg-black hover:border border-white hover:text-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              <div className="flex items-center">
                <FaDownload className="w-6 h-6 mr-2" />{" "}
                <p className="text-ld">Download Resume</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
