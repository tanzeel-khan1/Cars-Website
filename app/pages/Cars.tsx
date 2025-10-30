"use client";
import React from "react";
import { motion } from "framer-motion";
import Page from "../service/page";
const Cars = () => {
  return (
   <>
    <div className="pl-10 md:pl-32 pr-8 md:pr-20 flex justify-center">
      <motion.img
        src="cars.png"
        className="rounded-md shadow-md shadow-white/40"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      />
    </div>
    <Page/>
   </>
  );
};

export default Cars;
