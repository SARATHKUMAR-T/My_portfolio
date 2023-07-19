import { motion } from "framer-motion";
function About() {
  // const animae={flow:{}}
  return (
    <section
      className="relative overflow-x-hidden bg-slate-900 min-h-screen max-w-full py-6 sm:py-12 md:py-48"
      id="about"
    >
        <h1 className=" capitalize text-center text-2xl sm:text-6xl lg:text-2xl font-bold tracking-wider ">
        <span>a</span>
        bout{" "}
        <span >m</span>e
      </h1>
      {/* motion box left */}
      <motion.div
        initial={{ x: -20, scale: 0.3 }}
        whileInView={{ x: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="absolute hidden  sm:flex items-center bg-slate-900 h-3/5 w-[15%] rounded-r-lg left-0 top-[20%]"
      >
        <motion.div
          initial={{ x: -20, scale: 0.3 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 flex border-r-2 border-orange-800 items-center h-[80%] w-[80%] rounded-r-xl"
        >
          <motion.div
            initial={{ x: -20, scale: 0.3 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900 border-r-2 border-orange-800  flex items-center h-[70%] w-[70%] rounded-r-2xl "
          >
            <motion.div
              initial={{ x: -20, scale: 0.3 }}
              whileInView={{ x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900 border-r-2 border-orange-800 h-[60%] w-[60%] rounded-r-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* motion box right */}
      <motion.div
        initial={{ x: 0, scale: 0.3 }}
        whileInView={{ x: 20, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="absolute hidden sm:flex items-center  bg-slate-900 h-3/5 w-[15%] rounded-l-lg right-0 top-[20%] "
      >
        <motion.div
          initial={{ x: 0, scale: 0.3 }}
          whileInView={{ x: 20, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 flex border-l-2 border-orange-800 items-center h-[80%] w-[70%] rounded-l-xl"
        >
          <motion.div
            initial={{ x: 0, scale: 0.3 }}
            whileInView={{ x: 20, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900 border-l-2 border-orange-800  flex items-center h-[70%] w-[60%] rounded-l-2xl "
          >
            <motion.div
              initial={{ x: 0, scale: 0.3 }}
              whileInView={{ x: 20, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900 border-l-2 border-orange-800 h-[60%] w-[50%] rounded-l-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="max-w-md  md:max-w-xl mt-6 sm:mt-28 mx-auto ">
        <h3 className="px-4 text-6xl md:text-8xl font-bold tracking-wide text-center mb-4">
          S<span className="text-lime-300">a</span>ra
          <span className="text-lime-300">th</span>
        </h3>
        <p className="text-slate-50 font-medium tracking-wide text-sm sm:text-lg leading-7 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum
          quod aperiam inventore doloribus fugit ab culpa debitis, aspernatur
          aliquam quibusdam ut blanditiis ducimus, a, eos commodi laboriosam
          voluptate alias? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Odit harum quod aperiam inventore doloribus fugit ab culpa
          debitis, aspernatur aliquam quibusdam ut blanditiis ducimus, a, eos
          commodi laboriosam voluptate alias?
        </p>
      </div>
    </section>
  );
}

export default About;
