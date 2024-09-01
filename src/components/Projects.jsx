import ProjectAstraleth from "../assets/project_astraleth.jpg";
import ProjectAmraCord from "../assets/project_amracord.jpg";
import ProjectKronos from "../assets/project_kronos.svg";
import Tag from "./Tag.jsx";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <div>
        <div key="" className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            className="w-full lg:w-1/4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <img
              src={ProjectAstraleth}
              alt="Project Astraleth"
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            className="w-full  max-w-xl lg:w-3/4"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <a href="https://github.com/astraleth">
              <h6 className="mb-2 font-semibold">Astraleth</h6>
            </a>
            <p className="mb-4 text-neutral-400">
              A Minecraft mmorpg set in the distant galaxy of Astraleth. Build
              using <a href="https://minestom.net">Minestom</a>, a high
              performance do-it-yourself minecraft server software.
            </p>
            <Tag tagName="Java" />
            <Tag tagName="MongoDB" />
            <Tag tagName="Javalin" />
            <Tag tagName="Worldbuilding" />
          </motion.div>
        </div>

        <div key="" className="mb-8 flex flex-wrap lg:justify-center pt-4">
          <motion.div
            className="w-full lg:w-1/4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <img
              src={ProjectAmraCord}
              alt="Project AmraCord"
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            className="w-full  max-w-xl lg:w-3/4"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <a href="https://github.com/amraleth/amracord">
              <h6 className="mb-2 font-semibold">AmraCord</h6>
            </a>
            <p className="mb-4 text-neutral-400">
              A collection of tools that allow rapid development of Disocrd bots
              using Java. Contains various usefull things, including a module
              system and a config framework.
            </p>
            <Tag tagName="Java" />
            <Tag tagName="Discord" />
          </motion.div>
        </div>

        <div key="" className="mb-8 flex flex-wrap lg:justify-center pt-4">
          <motion.div
            className="w-full lg:w-1/4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <img
              src={ProjectKronos}
              alt="Project Kronos"
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            className="w-full  max-w-xl lg:w-3/4"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <a href="https://github.com/amraleth/kronos">
              <h6 className="mb-2 font-semibold">Kronos</h6>
            </a>
            <p className="mb-4 text-neutral-400">
              A work in progress deployment software for Minecraft servers,
              designed to be as minimal as possible, build on top of docker.
            </p>
            <Tag tagName="Java" />
            <Tag tagName="Minecraft" />
            <Tag tagName="Networking" />
            <Tag tagName="Docker" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
