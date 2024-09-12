import { TbBrandJavascript } from "react-icons/tb";
import { SiHandlebarsdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-400 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4 "
        >
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <TbBrandJavascript className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4 "
        >
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <SiHandlebarsdotjs className="text-7xl text-black" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4 "
        >
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4"
        >
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4"
        >
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <FaNode className="text-7xl text-green-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4"
        >
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
