import { motion } from "framer-motion";

export default function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 1 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center
  bg-linear-to-r from-cyan-300 via-white to-blue-400
  bg-clip-text text-transparent
  tracking-[0.25em]
  drop-shadow-[0_0_25px_rgba(56,189,248,0.9)]"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="block">MICROTONE</span>

        <span className="block mt-6 md:mt-8">
          ENTERPRISES
        </span>
      </motion.h1>
    </motion.div>
  );
}
