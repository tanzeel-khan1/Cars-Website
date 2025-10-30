
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ["easeOut"] }, 
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: ["easeOut"] }, 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: ["easeOut"] },
  }),
};

interface ServiceItem {
  img: string;
  title: string;
  text1: string;
  text2: string;
}

const Ser: React.FC = () => {
  const serviceItems: ServiceItem[] = [
    {
      img: "eyess.png",
      title: "Precise work",
      text1: "We uphold the highest standards of professionalism when",
      text2: "servicing your vehicles.",
    },
    {
      img: "dia.png",
      title: "Premium Products and Services",
      text1: "Ensure your car's longevity with a periodic exterior",
      text2: "protection treatment.",
    },
    {
      img: "security.png",
      title: "High-Level Security and Privacy",
      text1: "We understand the importance of privacy and security",
      text2: "for our clientele.",
    },
  ];

  return (
    <div className="pl-10 md:pl-32 pr-8 md:pr-20 mt-36 mb-10">
      <motion.div
        className="flex flex-col md:flex-row w-full md:h-120"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          className="w-full md:w-1/2 md:border-r md:border-white/15 flex flex-col justify-center"
          variants={textVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extralight font-[Gill_Sans] leading-tight"
            variants={textVariants}
          >
            We will take good
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extralight font-[Gill_Sans] leading-tight"
            variants={textVariants}
          >
            care of your car
          </motion.h1>

          <motion.img
            src="ser.png"
            alt="Service"
            className="w-full md:w-auto mt-10 md:mt-3 object-contain"
            variants={imageVariants}
          />
        </motion.div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          {serviceItems.map((item, i: number) => (
            <motion.div
              key={i}
              className={`mx-2 pl-1.5 pb-8 ${
                i < 2 ? "border-b border-white/10" : ""
              } ${i === 0 ? "mt-0" : "mt-8"}`}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <div className="flex items-center">
                <img src={item.img} alt={item.title} className="ml-5 w-10 h-10" />
                <h1 className="pl-3 text-2xl">{item.title}</h1>
              </div>
              <p className="text-[#CCCCCC] ml-5 mt-5">{item.text1}</p>
              <p className="text-[#CCCCCC] ml-5">{item.text2}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Ser;
