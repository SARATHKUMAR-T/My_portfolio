import globill from "../assets/globill2.png";
import techJob from "../assets/techjob.png";
import pizzeria from "../assets/pizzeria.png";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function Projects() {
  return (
    <section
      className="max-w-full min-h-screen py-6 sm:py-12 md:py-28 px-4 bg-lime-500 text-slate-900 "
      id="projects"
    >
      <motion.h1 className="uppercase text-center text-4xl sm:text-6xl lg:text-8xl font-bold tracking-wider">
        <span className="text-slate-100">M</span>y{" "}
        <span className="text-slate-100">Pro</span>j
        <span className="text-slate-100">e</span>ct
        <span className="text-slate-100">s</span>
      </motion.h1>

      <div className="uppercase text-center text-4xl sm:text-6xl lg:text-8xl font-bold tracking-wider max-w-full mt-12 grid grid-cols-1 lg:grid-cols-[auto,1fr,1fr] lg:grid-rows-3">
        <div className="text-8xl tracking-widest  px-4 pt-3">
          <motion.p
            initial={{ x: -80, scale: 0.1 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            0<span className="text-slate-100">1</span>
          </motion.p>
        </div>
        {/* 1st project image container */}
        <div className="py-8 ">
          <div className="relative h-72 sm:h-96 lg:h-[28rem]  w-[70%] rounded-lg mx-auto bg-gray-100 p-1">
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
              className="absolute h-72 sm:h-96 lg:h-[28rem]  w-full -top-4 -left-4 rounded-lg mx-auto border-4 border-dashed border-slate-700"
            ></motion.div>
          </div>
        </div>
        {/* 1st project project details */}
        <div className="py-0 lg:py-12 ">
          <div className="text-xs text-slate-800  space-y-1 sm:space-y-5 relative  w-[70%] shadow-2xl shadow-blue-700 rounded-tl-[20%] rounded-br-[20%]  mx-auto lg:mr-auto bg-gray-100 mt-12 lg:mt-24">
            <p className=" pt-5 ">GloBill</p>
            <p className="text-start text-md sm:text-lg px-6 tracking-wider text-cyan-500">
              GloBill is an In Inventory billing application
            </p>
            <p className="capitalize w-3/4 tracking-wider text-xs sm:text-sm leading-6 mx-auto">
              globill allows user to manage their inventory faster and better.
              users can track their sales and purchases to do effective
              management .It comes with varoius graphs to visualize the progress
              in more comfortable way{" "}
            </p>
            <div>
              <p className="text-slate-900 underline decoration-2 decoration-slate-800 tracking-widest">
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
              <p className="text-slate-900 underline decoration-2 decoration-slate-800 tracking-widest">
                Links
              </p>
              <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 ">
                <div className="flex hover:scale-105 duration-300 text-cyan-500 w-full justify-center mx-auto items-center gap-2 my-3">
                  <a
                    href="https://github.com/SARATHKUMAR-T/GloBill-FrontEnd"
                    target="_blank"
                    rel="noreferrer"
                    className=" inline-block"
                  >
                    <FaGithub className="w-8 h-8 inline-block " />
                    <span className="ml-2">front end</span>{" "}
                  </a>
                </div>
                <div className="flex hover:scale-105 duration-300 text-cyan-500  justify-center mx-auto items-center gap-2 my-3">
                  <a
                    href="https://github.com/SARATHKUMAR-T/inventory_backend"
                    target="_blank"
                    rel="noreferrer"
                    className=" inline-block"
                  >
                    <FaGithub className="w-8  h-8 inline-block " />
                    <span className="ml-2">back end</span>{" "}
                  </a>
                </div>
                <div className="md:col-span-2 flex hover:scale-105 duration-300 text-cyan-500 w-1/2 pb-4  mx-auto justify-center items-center gap-2">
                  <a
                    href="https://globill.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className=" inline-block"
                  >
                    <HiMiniArrowTopRightOnSquare className="w-8 h-8 inline-block" />
                    <span className="ml-2">live demo </span>
                  </a>
                </div>
              </div>
              {/* <div className="flex hover:scale-105 duration-300 text-cyan-500 w-1/2 justify-center mx-auto items-center gap-2 my-3">
                <a
                  href="https://github.com/SARATHKUMAR-T/GloBill-FrontEnd"
                  target="_blank"
                  rel="noreferrer"
                  className=" inline-block"
                >
                  <FaGithub className="w-8 h-8 inline-block " />
                  <span>github</span>{" "}
                </a>
              </div> */}
              {/* <div className="flex text-cyan-500 hover:scale-105 duration-300 w-1/2 pb-4  mx-auto justify-center items-center gap-2">
                <a
                  href="https://globill.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className=" inline-block"
                >
                  <HiMiniArrowTopRightOnSquare className="w-8 h-8 inline-block" />
                  live demo{" "}
                </a>
              </div> */}
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
            0<span className="text-slate-100">2</span>
          </motion.p>
        </div>
        {/* 2nd project image container */}
        <div className="py-8 ">
          <div className="relative h-72 sm:h-96 lg:h-[28rem]  md:h-96  w-[70%]   rounded-lg mx-auto bg-gray-100 p-1">
            <img
              src={pizzeria}
              className="rounded-md w-full h-full"
              alt="globill"
            />
            <motion.div
              initial={{ y: 80, scale: 0.1 }}
              whileInView={{ y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="absolute h-72 sm:h-96 md:h-96 lg:h-[28rem] w-full -top-4 -left-4 rounded-lg mx-auto border-4 border-dashed border-slate-700"
            ></motion.div>
          </div>
        </div>
        {/* 2nd project project details */}
        <div className="py-0 lg:py-12 ">
          <div className="text-xs text-slate-900 shadow-2xl shadow-blue-700 rounded-tl-[20%] rounded-br-[20%]  space-y-1 sm:space-y-5 relative  w-[70%]   mx-auto lg:mr-auto bg-gray-100 mt-12 lg:mt-24">
            <p className=" pt-5 ">Slicemasters Pizzeria</p>
            <p className="text-start text-md sm:text-lg px-6 tracking-wider text-cyan-500">
              Slicemasters Pizzeria is a pizza ordering application
            </p>
            <p className="capitalize w-3/4 tracking-wider text-xs sm:text-sm leading-6 mx-auto">
              A dynamic portfolio project showcasing a user-friendly pizza
              ordering application. Seamlessly integrating location sharing,
              diverse menu options, and hassle-free payment-on-delivery.{" "}
            </p>
            <div>
              <p className="text-slate-900 underline decoration-2 decoration-slate-800 tracking-widest">
                Tech Stacks Used
              </p>
              <div className="flex flex-col lg:flex-row justify-center  tracking-wider  w-3/4  gap-2 lg:gap-4  mx-auto mt-2">
                {/* <p className="bg-cyan-500 px-2 py-1 rounded-md ">React</p>
                <p className="bg-blue-400 px-2 py-1 rounded-md">Node</p> */}
                <p className="bg-cyan-500 text-slate-200 px-3 py-1 rounded-md ">
                  React
                </p>
              </div>
            </div>
            <div>
              <p className="text-slate-900 underline decoration-2 decoration-slate-800 tracking-widest">
                Links
              </p>
              <div className="grid grid-cols-1  ">
                <div className="flex hover:scale-105 duration-300 text-cyan-500 w-full justify-center mx-auto items-center gap-2 my-3">
                  <a
                    href="https://github.com/SARATHKUMAR-T/pizzaria"
                    target="_blank"
                    rel="noreferrer"
                    className=" inline-block"
                  >
                    <FaGithub className="w-8 h-8 inline-block " />
                    <span className="ml-2">github code</span>{" "}
                  </a>
                </div>

                <div className=" flex hover:scale-105 duration-300 text-cyan-500 w-1/2 pb-4  mx-auto justify-center items-center gap-2">
                  <a
                    href="https://slicematser.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className=" inline-block"
                  >
                    <HiMiniArrowTopRightOnSquare className="w-8 h-8 inline-block" />
                    <span className="ml-2">live demo </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd project */}
        <div className="text-8xl tracking-widest  px-4 pt-3">
          <motion.p
            initial={{ y: 80, scale: 0.1 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            0<span className="text-slate-100">3</span>
          </motion.p>
        </div>
        {/* 3rd project image container */}
        <div className="py-8 ">
          <div className="relative h-72 sm:h-96 lg:h-[28rem]  md:h-96  w-[70%]   rounded-lg mx-auto bg-gray-100 p-1">
            <img
              src={techJob}
              className="rounded-md w-full h-full"
              alt="globill"
            />
            <motion.div
              initial={{ y: 80, scale: 0.1 }}
              whileInView={{ y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="absolute h-72 sm:h-96 md:h-96 lg:h-[28rem] w-full -top-4 -left-4 rounded-lg mx-auto border-4 border-dashed border-slate-700"
            ></motion.div>
          </div>
        </div>
        {/* 3rd project project details */}
        <div className="py-0 lg:py-12 ">
          <div className="text-xs text-slate-900 shadow-2xl shadow-blue-700 rounded-tl-[20%] rounded-br-[20%]  space-y-1 sm:space-y-5 relative  w-[70%]   mx-auto lg:mr-auto bg-gray-100 mt-12 lg:mt-24">
            <p className=" pt-5 ">TechJob</p>
            <p className="text-start text-md sm:text-lg px-6 tracking-wider text-cyan-500">
              TechJob is a Job search Application
            </p>
            <p className="capitalize w-3/4 tracking-wider text-xs sm:text-sm leading-6 mx-auto">
              TechJob is an IOS and Android Compatable App Made With React
              native.A simple app that shows different jobs and provide
              application link{" "}
            </p>
            <div>
              <p className="text-slate-900 underline decoration-2 decoration-slate-800 tracking-widest">
                Tech Stacks Used
              </p>
              <div className="flex flex-col lg:flex-row justify-center  tracking-wider  w-3/4  gap-2 lg:gap-4  mx-auto mt-2">
                {/* <p className="bg-cyan-500 px-2 py-1 rounded-md ">React</p>
                <p className="bg-blue-400 px-2 py-1 rounded-md">Node</p> */}
                <p className="bg-cyan-500 text-slate-200 px-3 py-1 rounded-md ">
                  React
                </p>
                <p className="bg-lime-700 text-slate-100 px-2 py-1 rounded-md">
                  React Native
                </p>
              </div>
            </div>
            <div>
              <p className="text-slate-900 underline decoration-2 decoration-slate-800 tracking-widest">
                Links
              </p>
              <div className="grid grid-cols-1 grid-rows-2   ">
                <div className="flex hover:scale-105 duration-300 text-cyan-500 w-full justify-center mx-auto items-center gap-2 my-3">
                  <a
                    href="https://github.com/SARATHKUMAR-T/react_native_jobs"
                    target="_blank"
                    rel="noreferrer"
                    className=" inline-block"
                  >
                    <FaGithub className="w-8 h-8 inline-block " />
                    <span className="ml-2">github code</span>{" "}
                  </a>
                </div>

                <div className=" flex hover:scale-105 duration-300 text-cyan-500 w-1/2 pb-4  mx-auto justify-center items-center gap-2">
                  <a
                    href="https://expo.dev/@saratht/react_native_jobs"
                    target="_blank"
                    rel="noreferrer"
                    className=" inline-block"
                  >
                    <HiMiniArrowTopRightOnSquare className="w-8 h-8 inline-block" />
                    <span className="ml-2">live demo </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
