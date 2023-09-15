import s2 from "../assets/s2blur.jpg";
import linkedin from "../assets/linkedin.json";
import github from "../assets/new.json";
import Lottie from "lottie-react";

import { motion } from "framer-motion";

import Navbar from "../Components/Navbar";

function Hero() {
  return (
    <div className="min-h-screen  bg-slate-50">
      <Navbar />
      <section className="  py-0 sm:py-16 px-4 " id="hero">
        <div className="max-w-4xl flex flex-col items-center  gap-4 sm:gap-0 sm:flex-row mt-8 sm:mt-20  mx-auto ">
          {/* text-box */}
          <div className="flex-1 drop-shadow-2xl  uppercase px-4 py-3">
            <h1 className=" hover:shadow-2xl duration-200 rounded-lg hover:bg-blue-500 text-4xl md:text-8xl  font-extrabold tracking-wide">
              <span className="text-slate-700">H</span>
              <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                e
              </span>
              <span className="text-slate-700">llo</span>
              <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                !
              </span>
            </h1>

            <p className="hover:shadow-2xl text-lime-400 duration-200 rounded-lg hover:bg-blue-500 text-4xl md:text-8xl  hover:text-9xl  font-extrabold tracking-wide">
              <span className="text-slate-700">I'm</span> Sarath
            </p>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className=" capitalize text-2xl text-slate-700 font-semibold tracking-wider"
            >
              And i make{" "}
              <span className="text-lime-500 text-3xl font-Merienda">
                websites!
              </span>{" "}
            </motion.p>
            {/* <p className="capitalize text-end pt-6 font-medium font-mono"> MERN STACK DEVELOPER </p> */}
          </div>
          {/* image box */}
          <motion.div
            initial={{ y: -80, scale: 0.3 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className=" h-auto  px-3 mx-auto  rounded-lg "
          >
            <div className="h-72 relative md:h-96  w-72 md:w-96 ">
              <motion.div
                initial={{ x: -80, scale: 0.1 }}
                whileInView={{ x: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="absolute  z-10 md:h-80 h-60 w-60 md:w-80   -top-2 left-4 rounded-tl-3xl rounded-br-3xl mx-auto border-4 border-dashed border-lime-400"
              ></motion.div>
              <img
                src={s2}
                className=" md:h-80 h-60 w-60 md:w-80 rounded-tl-3xl   rounded-br-3xl shadow-xl shadow-blue-700  grayscale mx-auto"
                alt="profilephoto"
              />
            </div>
          </motion.div>
        </div>
        {/* socail links */}
        <div className=" grow w-full mt-4 sm:mt-8 relative max-w-lg mx-auto py-2 px-4 mb-12 sm:mb-0">
          <div className="flex  py-2 rounded-sm  shadow-lime-500  px-4 gap-2 items-center justify-center">
            <p className="pt-4 capitalize sm:text-lg text-slate-800 text-sm sm:font-medium ">
              find me here...
            </p>
            <div className="w-16 h-16 hover:scale-125 duration-300 ">
              <a
                href="https://github.com/SARATHKUMAR-T"
                target="_blank"
                rel="noreferrer"
              >
                <Lottie height={300} width={300} animationData={github} />
              </a>
            </div>
            <div className=" w-16 h-16  hover:scale-125 duration-300 ">
              <a
                href="https://www.linkedin.com/in/sarathfsd/"
                target="_blank"
                rel="noreferrer"
              >
                <Lottie height={400} width={400} animationData={linkedin} />
              </a>
            </div>
            {/* <img src={Shape5} className="rotate-90 absolute -top-5 h-28"/> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
