'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Cars = () => {
  return (
    <div className="pl-10 md:pl-32 pr-8 md:pr-20 flex justify-center">
      <motion.img
        src="cars.png"
        className="rounded-md"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}
      />
    </div>
  );
};

export default Cars;
