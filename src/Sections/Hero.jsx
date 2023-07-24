import profile2 from "../assets/KOLORO_1673783232127.jpg";
import s1 from "../assets/s1blur.jpg";
import s2 from "../assets/s2blur.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
// import prof2 from "../assets/prof2.png";
// import prof3 from "../assets/prof3.png";
import Navbar from "../Components/Navbar";
// import MarkSvg from "../assets/shape-04.svg";
// import Shape5 from "../assets/shape-05.svg";
// import arrow46 from "../assets/arrow-46.svg";

function Hero() {
  return (
    <div className="min-h-screen max-w-full bg-blue-600">
      <Navbar />
      <section
        className=" flex flex-col  items-center py-0 sm:py-16 px-4 "
        id="hero"
      >
        <div className="flex flex-col  gap-4 sm:gap-0 sm:flex-row mt-16 max-w-full mx-auto ">
          {/* text-box */}
          <div className="w-1/2 uppercase px-4 py-3">
            <h1 className="hover:shadow-2xl duration-200 rounded-lg hover:bg-blue-500 text-6xl md:text-8xl font-bold tracking-wide">
              <span className="text-slate-900">H</span>e
              <span className="text-slate-900">llo</span>!
            </h1>
            <p className="hover:shadow-2xl duration-200 rounded-lg hover:bg-blue-500 text-6xl md:text-8xl font-bold tracking-wide">
              <span className="text-slate-900">I'm</span> Sarath
            </p>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className=" capitalize text-2xl font-semibold tracking-wider"
            >
              And i make <span className="text-slate-900">web</span>sites!{" "}
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
                className="absolute h-72 z-10 md:h-96  w-72 md:w-96  -top-4 -left-4 rounded-lg mx-auto border-2 border-dashed border-lime-300"
              ></motion.div>
              <img
                src={s2}
                className=" h-72 md:h-96 w-72 md:w-96 rounded-lg  grayscale mx-auto"
                alt="profilephoto"
              />
            </div>
          </motion.div>
        </div>
        {/* socail links */}
        <div className=" grow w-full mt-4 sm:mt-16 relative max-w-sm mx-auto py-2 px-4">
          <div className="flex  py-2 rounded-sm justify-center px-4 gap-12">
            <p className="pt-4 capitalize text-lime-300">find me here...</p>
            <div className="hover:border-4 border-r-4 border-b-4 border-black rounded-full w-10 h-10 duration-300">
              <a href="https://github.com/SARATHKUMAR-T" target="_">
                <FaGithub className="w-12 h-12 rounded-full hover:border-4 text-lime-300 border-r-4 border-b-4 border-black duration-300" />
              </a>
            </div>
            <div className="hover:border-4 border-r-4 border-b-4 border-black rounded-sm w-10 h-10 duration-300 ">
              <a href="https://www.linkedin.com/in/sarathfsd/" target="_">
                <FaLinkedin className="w-8 h-8 hover:border-4 text-lime-300 border-r-4 border-b-4 border-black duration-300" />
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
