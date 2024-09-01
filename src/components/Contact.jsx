import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        className="my-10 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Contact me
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          className="my-4"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          @amraleth
        </motion.p>
        <motion.p
          className="my-4"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <a href="mailto:me@amraleth.xyz" className="underline">
            me@amraleth.xyz
          </a>

          <p className="flex justify-center pt-10">Amraleth &copy; 2024</p>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
