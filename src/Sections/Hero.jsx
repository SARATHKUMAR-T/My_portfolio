import s2 from "../assets/s2blur.jpg";
import linkedin from "../assets/linkedin.json";
import github from "../assets/new.json";
import Lottie from "lottie-react";

import { motion } from "framer-motion";
// import prof2 from "../assets/prof2.png";
// import prof3 from "../assets/prof3.png";
import Navbar from "../Components/Navbar";
// import MarkSvg from "../assets/shape-04.svg";
// import Shape5 from "../assets/shape-05.svg";
// import arrow46 from "../assets/arrow-46.svg";

function Hero() {
  return (
    <div className="min-h-screen max-w-full bg-slate-50">
      <Navbar />
      <section
        className=" flex flex-col  items-center py-0 sm:py-16 px-4 "
        id="hero"
      >
        <div className="flex flex-col  gap-4 sm:gap-0 sm:flex-row mt-8 sm:mt-16 max-w-full mx-auto ">
          {/* text-box */}
          <div className="w-1/2 drop-shadow-2xl  uppercase px-4 py-3">
            <h1 className=" hover:shadow-2xl duration-200 rounded-lg hover:bg-blue-500 text-6xl md:text-9xl font-extrabold tracking-wide">
              <span className="text-slate-900">H</span>
              <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                e
              </span>
              <span className="text-slate-900">llo</span>
              <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                !
              </span>
            </h1>

            <p className="hover:shadow-2xl text-lime-400 duration-200 rounded-lg hover:bg-blue-500 text-6xl md:text-9xl font-extrabold tracking-wide">
              <span className="text-slate-900">I'm</span> Sarath
            </p>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className=" capitalize text-2xl text-slate-900 font-semibold tracking-wider"
            >
              And i make{" "}
              <span className="text-lime-500 text-3xl font-julee">
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
                className="absolute h-72 z-10 md:h-96  w-72 md:w-96  -top-4 -left-4 rounded-tl-3xl rounded-br-3xl mx-auto border-4 border-dashed border-lime-400"
              ></motion.div>
              <img
                src={s2}
                className=" h-72 md:h-96 w-72 md:w-96 rounded-tl-3xl   rounded-br-3xl shadow-xl shadow-blue-700  grayscale mx-auto"
                alt="profilephoto"
              />
            </div>
          </motion.div>
        </div>
        {/* socail links */}
        <div className=" grow w-full mt-4 sm:mt-16 relative max-w-lg mx-auto py-2 px-4">
          <div className="flex  py-2 rounded-sm bg-slate-50 shadow-lg   shadow-lime-500  px-4 gap-2 items-center justify-center">
            <p className="pt-4 capitalize text-xl font-medium text-lime-400">
              find me here...
            </p>
            <div className="w-28 h-28 hover:scale-110 duration-300 ">
              <a
                href="https://github.com/SARATHKUMAR-T"
                target="_blank"
                rel="noreferrer"
              >
                <Lottie height={400} width={400} animationData={github} />
              </a>
            </div>
            <div className=" w-28 h-28  hover:scale-110 duration-300 ">
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
