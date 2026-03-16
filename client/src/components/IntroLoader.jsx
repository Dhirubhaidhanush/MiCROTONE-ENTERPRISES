import { motion } from "framer-motion";
import { useState } from "react";
import Printer from "@/assets/Printerimage.png";

export default function IntroLoader({ onFinish }) {
  const [printing, setPrinting] = useState(false);

  const handleEnter = () => {
    setPrinting(true);

    setTimeout(() => {
      if (onFinish) onFinish();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">

      {/* Printer Container */}
      <div className="relative flex flex-col items-center">

        {/* Paper */}
        <motion.div
          className="absolute top-[90px] w-[320px] h-[220px] bg-white rounded-sm shadow-xl flex flex-col items-center justify-start text-center pt-16"
          initial={{ y: 0, opacity: 0 }}
          animate={
            printing
              ? {
                  y: 320,
                  opacity: 1
                }
              : {}
          }
          transition={{
            duration: 2,
            ease: "easeOut"
          }}
        >
          <motion.div
            className="text-blue-900 font-bold text-2xl tracking-widest leading-relaxed"
            initial={{ opacity: 0 }}
            animate={printing ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            MICROTONE<br />
            ENTERPRISES
          </motion.div>
        </motion.div>

        {/* Printer Image */}
        <img
          src={Printer}
          alt="Printer"
          className="w-[500px] relative z-10"
        />

      </div>

      {/* Enter Button */}
      {!printing && (
        <motion.button
          onClick={handleEnter}
          className="mt-6 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Get Started
        </motion.button>
      )}

    </div>
  );
}
