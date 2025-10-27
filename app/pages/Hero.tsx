"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="md:h-220  h-136 w-full">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="pt-28 text-center text-3xl md:text-8xl"
      >
        Luxury Car Detailing
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center pt-6"
      >
        Experience the prestige of a professionally detailed car,{" "}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center pt-2"
      >
        radiating elegance and refinement at every turn.
      </motion.p>

      <motion.h4
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="group flex justify-center items-center cursor-pointer text-3xl text-center mt-8 transition-all duration-300 hover:text-gray-400 "
      >
        Let’s connect
        <MdArrowOutward className="ml-2 transition-transform duration-300 " />
      </motion.h4>

      <motion.img
        src="subtract.png"
        className="mt-20"
        alt="Car"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      />
    </div>
  );
};

export default Hero;
