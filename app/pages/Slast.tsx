"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const PremiumBackground = dynamic(() => import("../components/PremiumBackground"), { ssr: false });

const Slast = () => {
  return (
    <div className="relative pl-10 md:pl-32 pr-8 md:pr-20 m-0 mb-10 p-0 mt-20 overflow-hidden bg-black">
      <PremiumBackground />
      <motion.img
        src="SL.png"
        alt="Luxury Car Detailing"
        className="w-full h-auto object-cover rounded-2xl"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} 
      />

      <div className="absolute left-10 md:left-32 top-1 sm:top-10 z-10">
        <motion.h2
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light font-[cursive] pl-4 sm:pl-10 md:pl-20 pt-4 sm:pt-10 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Book your luxury
        </motion.h2>

        <motion.h2
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light font-[cursive] pl-4 sm:pl-10 md:pl-20 pt-2 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          car detailing today
        </motion.h2>

        <motion.p
          className="text-[#CCCCCC] text-sm sm:text-base pl-4 sm:pl-10 md:pl-20 pt-4 sm:pt-8 font-medium drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Click the link below. Fill out the details and
        </motion.p>

        <motion.p
          className="text-[#CCCCCC] text-sm sm:text-base pl-4 sm:pl-10 md:pl-20 pt-1 font-medium drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          we’ll get back to you in less than 24 hours.
        </motion.p>

        <motion.button
          className="flex items-center ml-4 sm:ml-10 md:ml-20 mt-6 sm:mt-8 font-[sans-serif] text-lg sm:text-xl md:text-2xl lg:text-3xl text-white cursor-pointer hover:opacity-80 transition hover:text-[#CCCCCC] group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="relative">
            Get a quote now
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-[#ddb360] rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </span>
          <motion.img
            src="arrow.png"
            alt="arrow"
            className="ml-3 w-5 sm:w-6 md:w-8 group-hover:translate-x-1 transition"
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.button>
      </div>
    </div>
  );
};

export default Slast;
