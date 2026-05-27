"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";

const PremiumBackground = dynamic(() => import("../components/PremiumBackground"), { ssr: false });

interface DetailItem {
  title: string;
  desc: string;
  img: string;
  price: string;
}

export default function DetailingSection() {
  const details: DetailItem[] = [
    {
      title: "Signature Detail",
      desc: "A refined wash, gloss treatment and premium interior refresh designed for modern luxury vehicles.",
      img: "/car1.png",
      price: "$199+",
    },
    {
      title: "Platinum Protection",
      desc: "Superior paint preservation with ceramic finish plus leather and trim restoration.",
      img: "/car2.png",
      price: "$349+",
    },
    {
      title: "Elite Full Detail",
      desc: "Complete exterior, interior, wheel and engine bay care for show-quality results.",
      img: "/car3.png",
      price: "$499+",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section className="relative bg-black mt-20 px-6 pb-24 pt-16 md:px-10 lg:px-20 overflow-hidden">
      <PremiumBackground />
      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="mb-12 max-w-xl space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Pricing</p>
          <h2 className="text-4xl font-light text-white sm:text-5xl">Premium packages for exceptional results.</h2>
          <p className="text-base leading-7 text-gray-300">
            Choose the level of care that matches your vehicle and lifestyle, with luxury finishes at every step.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {details.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.2)] hover:border-white/20 hover:bg-white/8 transition-all duration-300"
              variants={cardVariants}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-[#ddb360]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={720}
                  height={480}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
                <motion.div 
                  className="absolute left-6 bottom-6 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-sm text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.price}
                </motion.div>
              </div>

              <div className="relative p-7">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">{item.desc}</p>
                <motion.button 
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-200 transition hover:text-[#ddb360]"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
