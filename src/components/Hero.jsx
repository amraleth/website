import avatar from "../assets/avatar.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b  border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Amraleth
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-green-500 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent"
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
            >
              Java Developer & Worldbuilder
            </motion.span>
            <motion.p
              className="pt-2"
              variants={container(1)}
              initial="hidden"
              animate="visible"
            >
              Hello there, my name is Amraleth and I'm a german Java developer
              with over 5 years of experience in backend and Minecraft
              development. Besides my love for programming, I have a particular
              interest in photography, as well as worldbuilding and the creation
              of immersive worlds with complex background lore, quests and
              items. Also: cats are superior to dogs!
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              src={avatar}
              alt="avatar"
              className="rounded-xl h-96 w-96"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
