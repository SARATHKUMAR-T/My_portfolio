import globill from "../assets/cropped.globill.png";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function Projects() {
  return (
    <section
      className="max-w-full min-h-screen py-6 sm:py-12 md:py-28 px-4 bg-slate-900 "
      id="projects"
    >
      <motion.h1 className="uppercase text-center text-4xl sm:text-6xl lg:text-8xl font-bold tracking-wider">
        <span className="text-lime-300">M</span>y{" "}
        <span className="text-lime-300">Pro</span>j
        <span className="text-lime-300">e</span>ct
        <span className="text-lime-300">s</span>
      </motion.h1>

      <div className="uppercase text-center text-4xl sm:text-6xl lg:text-8xl font-bold tracking-wider max-w-full mt-12 grid grid-cols-1 lg:grid-cols-[auto,1fr,1fr] lg:grid-rows-2">
        <div className="text-8xl tracking-widest  px-4 pt-3">
          <motion.p
            initial={{ x: -80, scale: 0.1 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            0<span className="text-lime-300">1</span>
          </motion.p>
        </div>
        {/* 1st project image container */}
        <div className="py-8 ">
          <div className="relative h-72 sm:h-96 lg:h-[28rem]  w-[70%] rounded-lg mx-auto bg-gray-400 px-2 py-2">
            <img
              src={globill}
              className="rounded-md h-full w-full"
              alt="globill"
            />
            <motion.div
              initial={{ x: -80, scale: 0.1 }}
              whileInView={{ x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="absolute h-72 sm:h-96 lg:h-[28rem]  w-full -top-4 -left-4 rounded-lg mx-auto border-2 border-dashed border-lime-300"
            ></motion.div>
          </div>
        </div>
        {/* 1st project project details */}
        <div className="py-0 lg:py-12 ">
          <div className="text-xs text-slate-800  space-y-1 sm:space-y-5 relative  w-[80%] rounded-lg  mx-auto lg:mr-auto bg-gray-400 mt-12 lg:mt-24">
            <p className=" pt-5 ">GloBill</p>
            <p className="text-start text-md sm:text-lg px-6 tracking-wider text-lime-300">
              GloBill is an In Inventory billing application
            </p>
            <p className="capitalize w-3/4 tracking-wider text-xs sm:text-sm leading-6 mx-auto">
              globill allows user to manage their inventory faster and better.
              users can track their sales and purchases to do effective
              management .It comes with varoius graphs to visualize the progress
              in more comfortable way{" "}
            </p>
            <div>
              <p className="text-lime-300 underline decoration-2 decoration-slate-800 tracking-widest">
                Tech Stacks Used
              </p>
              <div className="grid grid-cols-2 grid-rows-2 xl:grid-cols-4 lg:grid-rows-1  tracking-wider  w-3/4  gap-2 lg:gap-4  mx-auto mt-2">
                <p className="bg-cyan-500 px-2 py-1 rounded-md ">React</p>
                <p className="bg-blue-400 px-2 py-1 rounded-md">Node</p>
                <p className="bg-green-700 text-slate-200 px-1 py-1 rounded-md ">
                  Mongodb
                </p>
                <p className="bg-slate-900 text-slate-100 px-2 py-1 rounded-md">
                  Express
                </p>
              </div>
            </div>
            <div>
              <p className="text-lime-300 underline decoration-2 decoration-slate-800 tracking-widest">
                Links
              </p>
              <div className="flex  w-1/2 justify-center mx-auto items-center gap-2 my-3">
                <a
                  href="https://github.com/SARATHKUMAR-T/GloBill-FrontEnd"
                  target="_"
                  className=" inline-block"
                >
                  <FaGithub className="w-8 h-8 inline-block " />
                  <span>github</span>{" "}
                </a>
              </div>
              <div className="flex w-1/2  mx-auto justify-center items-center gap-2">
                <a
                  href="https://globill.netlify.app/"
                  target="_"
                  className=" inline-block"
                >
                  <HiMiniArrowTopRightOnSquare className="w-8 h-8 inline-block" />
                  live demo{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd project */}
        <div className="text-8xl tracking-widest  px-4 pt-3">
          <motion.p
            initial={{ y: 80, scale: 0.1 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            0<span className="text-lime-300">2</span>
          </motion.p>
        </div>
        {/* 2nd project image container */}
        <div className="py-8 ">
          <div className="relative h-72 sm:h-96 lg:h-[28rem]  md:h-96  w-[70%] rounded-lg mx-auto bg-gray-400 px-2 py-2">
            <img
              src={globill}
              className="rounded-md w-full h-full"
              alt="globill"
            />
            <motion.div
              initial={{ y: 80, scale: 0.1 }}
              whileInView={{ y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="absolute h-72 sm:h-96 md:h-96 lg:h-[28rem] w-full -top-4 -left-4 rounded-lg mx-auto border-2 border-dashed border-lime-300"
            ></motion.div>
          </div>
        </div>
        {/* 2nd project project details */}
        <div className="py-0 lg:py-12 ">
          <div className="text-xs text-slate-800 py-2 space-y-5 relative  w-[80%] rounded-lg mx-auto lg:mr-auto bg-gray-400 mt-12 lg:mt-24">
            <p className=" pt-5 ">GloBill</p>
            <p className="text-start text-lg px-6 tracking-wider text-lime-300">
              GloBill is an In Inventory billing application
            </p>
            <p className="capitalize w-3/4 tracking-wider text-sm leading-6 mx-auto">
              globill allows user to manage their inventory faster and better.
              users can track their sales and purchases to do effective
              management .It comes with varoius graphs to visualize the progress
              in more comfortable way{" "}
            </p>
            <div>
              <p className="text-lime-300 underline decoration-2 decoration-slate-800 tracking-widest">
                Tech Stacks Used
              </p>
              <div className="grid grid-cols-2 grid-rows-2 xl:grid-cols-4 lg:grid-rows-1  tracking-wider  w-3/4  gap-2 lg:gap-4  mx-auto mt-2">
                <p className="bg-cyan-500 px-2 py-1 rounded-md ">React</p>
                <p className="bg-blue-400 px-2 py-1 rounded-md">Node</p>
                <p className="bg-green-700 text-slate-200 px-1 py-1 rounded-md ">
                  Mongodb
                </p>
                <p className="bg-slate-900 text-slate-100 px-2 py-1 rounded-md">
                  Express
                </p>
              </div>
            </div>
            <div>
              <p className="text-lime-300 underline decoration-2 decoration-slate-800 tracking-widest">
                Links
              </p>
              <div className="flex  w-1/2 justify-center mx-auto items-center gap-2 my-3">
                <a
                  href="https://github.com/SARATHKUMAR-T/GloBill-FrontEnd"
                  target="_"
                  className=" inline-block"
                >
                  <FaGithub className="w-8 h-8 inline-block " />
                  <span>github</span>{" "}
                </a>
              </div>
              <div className="flex w-1/2  mx-auto justify-center items-center gap-2">
                <a
                  href="https://globill.netlify.app/"
                  target="_"
                  className=" inline-block"
                >
                  <HiMiniArrowTopRightOnSquare className="w-8 h-8 inline-block" />
                  live demo{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
