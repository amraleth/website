import { DiRedis } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaJava, FaRust, FaGolang } from "react-icons/fa6";
import { SiMongodb, SiSpring } from "react-icons/si";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Languages = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Languages & Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={container(0)}
          initial="hidden"
          animate="visible"
        >
          <FaJava className="text-3xl text-orange-400" />
        </motion.div>

        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
        >
          <FaRust className="text-3xl text-red-400" />
        </motion.div>

        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={container(0.4)}
          initial="hidden"
          animate="visible"
        >
          <FaGolang className="text-3xl text-blue-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={container(0.6)}
          initial="hidden"
          animate="visible"
        >
          <SiSpring className="text-3xl text-green-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={container(0.8)}
          initial="hidden"
          animate="visible"
        >
          <SiMongodb className="text-3xl text-lime-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={container(1)}
          initial="hidden"
          animate="visible"
        >
          <DiRedis className="text-3xl text-red-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={container(1.2)}
          initial="hidden"
          animate="visible"
        >
          <FaDocker className="text-3xl text-blue-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Languages;
