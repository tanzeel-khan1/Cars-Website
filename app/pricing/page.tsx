"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface DetailItem {
  title: string;
  desc: string;
  img: string;
}

export default function DetailingSection() {
  const details: DetailItem[] = [
    {
      title: "Entry level detail",
      desc: "Treat your luxury car to a thorough hand wash and wax application.",
      img: "/car1.png",
    },
    {
      title: "Maintenance detail",
      desc: "Ensure your car’s longevity with a periodic exterior protection treatment.",
      img: "/car2.png",
    },
    {
      title: "Full detail",
      desc: "Pamper your vehicle with a complete treatment, leaving no detail overlooked.",
      img: "/car3.png",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="bg-black text-white pl-10 md:pl-32 pr-8 md:pr-20 py-24 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {details.map((item, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg "
            variants={cardVariants}
            whileHover={{ scale: 1.03, rotateY: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-linear-to-br from-yellow-400/40 via-white/10 to-transparent transition-opacity duration-500" />

            <div className="overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6 space-y-3 relative z-10">
              <motion.h3
                className="text-lg font-semibold"
                variants={cardVariants}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-sm text-gray-400"
                variants={cardVariants}
              >
                {item.desc}
              </motion.p>
              <motion.button
                className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
                whileHover={{ x: 6 }}
              >
                Learn more →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
