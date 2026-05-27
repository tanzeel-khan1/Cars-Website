"use client";
import React from "react";
import { motion } from "framer-motion";
import Page from "../service/page";
import dynamic from "next/dynamic";

const PremiumBackground = dynamic(() => import("../components/PremiumBackground"), { ssr: false });

const Cars = () => {
  return (
   <>
    <section className="relative py-20 bg-black overflow-hidden">
      <PremiumBackground />
      <div className="pl-10 md:pl-32 pr-8 md:pr-20 flex justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#ddb360]/20 to-[#b8990e]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <img
            src="cars.png"
            className="relative rounded-lg shadow-2xl shadow-[#ddb360]/30"
            alt="Luxury car"
          />
        </motion.div>
      </div>
    </section>
    <Page/>
   </>
  );
};

export default Cars;
