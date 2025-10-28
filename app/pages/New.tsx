"use client";
import React from "react";
import { motion } from "framer-motion";

const DetailingSection = () => {
  return (
    <div className="pl-10 md:pl-32 pr-8 md:pr-18 bg-black">
      <section className="text-white py-8 px-6 sm:px-10 lg:px-0 flex items-start overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.p
            className="text-base tracking-wider opacity-90 mb-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Luxury car detailing
          </motion.p>

          <motion.div
            className="w-full h-px bg-white opacity-40 mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
            viewport={{ once: false }}
          ></motion.div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-5xl font-light max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false }}
            >
              Love in Every Detail
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg font-light max-w-md md:mt-0 opacity-80"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: false }}
            >
              Immerse yourself in luxury with our bespoke detailing packages
              tailored to your car's unique needs.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DetailingSection;
