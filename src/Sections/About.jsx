import { motion } from "framer-motion";
function About() {
  // const animae={flow:{}}
  return (
    <section
      className="relative overflow-x-hidden text-slate-900 bg-lime-500 min-h-screen max-w-full py-6 sm:py-12 md:py-24"
      id="about"
    >
      <h1 className=" capitalize text-center text-2xl sm:text-6xl lg:text-2xl font-bold tracking-wider ">
        <span>a</span>
        bout <span>m</span>e
      </h1>
      {/* motion box left */}
      <motion.div
        initial={{ x: -20, scale: 0.3 }}
        whileInView={{ x: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="absolute hidden  sm:flex items-center bg-lime-500 h-3/5 w-[15%] rounded-r-lg left-0 top-[20%]"
      >
        <motion.div
          initial={{ x: -20, scale: 0.3 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="bg-lime-500 flex border-r-2 border-white items-center h-[80%] w-[80%] rounded-r-xl"
        >
          <motion.div
            initial={{ x: -20, scale: 0.3 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="bg-lime-500 border-r-2 border-white  flex items-center h-[70%] w-[70%] rounded-r-2xl "
          >
            <motion.div
              initial={{ x: -20, scale: 0.3 }}
              whileInView={{ x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="bg-lime-500 border-r-2 border-white h-[60%] w-[60%] rounded-r-full"
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
        className="absolute hidden sm:flex items-center  bg-lime-500 h-3/5 w-[15%] rounded-l-lg right-0 top-[20%] "
      >
        <motion.div
          initial={{ x: 0, scale: 0.3 }}
          whileInView={{ x: 20, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="bg-lime-500 flex border-l-2 border-white items-center h-[80%] w-[70%] rounded-l-xl"
        >
          <motion.div
            initial={{ x: 0, scale: 0.3 }}
            whileInView={{ x: 20, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="bg-lime-500 border-l-2 border-white  flex items-center h-[70%] w-[60%] rounded-l-2xl "
          >
            <motion.div
              initial={{ x: 0, scale: 0.3 }}
              whileInView={{ x: 20, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="bg-lime-500 border-l-2 border-white h-[60%] w-[50%] rounded-l-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="max-w-md  md:max-w-xl mt-6 sm:mt-6 mx-auto ">
        <h3 className=" px-4 text-6xl md:text-8xl font-julee tracking-wide text-center mb-4">
          S<span className="text-lime-300">a</span>ra
          <span className="text-lime-300">th</span>
        </h3>
        <ul className="list-disc">
          <li className="mb-3">
            <p className="text-slate-900  font-medium tracking-widest text-xs sm:text-base leading-7 px-4">
              Hi there ! I'm a passionate and highly skilled Full Stack Web
              Developer with a focus on <span className="underline decoration-slate-900">MERN stack technologies</span>. Embracing the
              ever-evolving world of web development, I thrive on exploring new
              and exciting technologies that emerge in the industry.
            </p>
          </li>
          <li className="mb-3">
            <p className="text-slate-900 font-medium tracking-wider text-xs sm:text-base leading-7 px-4">
              My journey as a developer has been guided by the belief that
              <span className="text-sky-100 font-julee"> "Nothing is difficult; it's just unfamiliar."</span> This
              mantra inspires me to approach challenges with determination and a
              willingness to learn. I'm always seeking opportunities to grow
              both professionally and personally, ensuring that I stay at the
              forefront of the rapidly changing tech landscape.
            </p>
          </li>
        
        </ul>
      </div>
    </section>
  );
}

export default About;
