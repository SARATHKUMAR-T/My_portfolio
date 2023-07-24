import { motion } from "framer-motion";

function Skills() {
  return (
    <section
      className="min-h-screen px-4 py-12 max-w-full bg-blue-700"
      id="skills"
    >
      <h1 className="uppercase text-center mt-8 text-4xl sm:text-6xl lg:text-6xl font-bold tracking-wider">
        <span className="text-lime-300">S</span>kills
      </h1>
      <div className=" rounded-lg gap-8 text-slate-100 flex items-center justify-center  flex-col max-w-4xl mx-auto mt-12 px-4 py-12">
        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl md:text-3xl font-semibold w-36 text-center sm:text-end ">
            React
          </p>
          <div className="flex gap-2">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4  "
            ></motion.div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl md:text-3xl font-semibold w-36  text-center sm:text-end  ">
            Node
          </p>
          <div className="flex gap-2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4 "
            ></motion.div>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4  "
            ></motion.div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl md:text-3xl font-semibold w-36 text-center sm:text-end ">
            MongoDb
          </p>
          <div className="flex gap-2">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4  "
            ></motion.div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl md:text-3xl font-semibold w-36  text-center sm:text-end  ">
            Express
          </p>
          <div className="flex gap-2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4  "
            ></motion.div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl md:text-3xl font-semibold w-36 text-center sm:text-end ">
            React Native
          </p>
          <div className="flex gap-2">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2 }}
              className="h-8 md:h-14 w-8 md:w-28 rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4 border-lime-100 bg-lime-500"
            ></motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4 border-lime-100 "
            ></motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className=" h-8 md:h-14 w-8 md:w-28  rounded-lg border-4  "
            ></motion.div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="uppercase text-center my-12 text-2xl sm:text-6xl lg:text-6xl font-bold tracking-wider">
          <span className="text-lime-300 ">C</span>ertifications
        </h1>
        <p className="max-w-2xl my-4 mx-auto text-md sm:text-lg text-center capitalize tracking-wide ">
          i completed 3 months MERN stack development programme from guvi which
          is an IIT-M incubated company.
        </p>
        <p className="max-w-2xl  mx-auto text-md sm:text-lg text-center capitalize tracking-wide ">
          in addition to that i completed additional courses from udemy to
          ensure that my skills are upto updation.
        </p>
      </div>
    </section>
  );
}

export default Skills;
