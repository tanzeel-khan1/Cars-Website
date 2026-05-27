"use client";
import { motion } from "framer-motion";
import { PremiumCard, PremiumHeading, PremiumLabel } from "../components/PremiumComponents";
import dynamic from "next/dynamic";

const PremiumBackground = dynamic(() => import("../components/PremiumBackground"), { ssr: false });

const DetailingSection = () => {
  const features = [
    {
      title: "Precision Finish",
      description: "Every panel is polished, protected, and perfected for a showroom-ready appearance.",
      icon: "✨",
    },
    {
      title: "Premium Protection",
      description: "Ceramic coatings, paint sealants and interior protection delivered with expert care.",
      icon: "🛡️",
    },
    {
      title: "White Glove Service",
      description: "Personalized pickup, delivery, and concierge-grade customer support.",
      icon: "👑",
    },
  ];

  return (
    <section className="relative bg-black px-6 pb-20 pt-20 md:px-10 lg:px-20 overflow-hidden">
      <PremiumBackground />
      <div className="mx-auto max-w-6xl relative z-10">
        <PremiumCard className="mb-10 p-10">
          <PremiumLabel className="block">What makes us different</PremiumLabel>
          <PremiumHeading className="mt-4">
            Exclusive detailing built for high-end vehicles.
          </PremiumHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-7 text-gray-300"
          >
            Our work is driven by craftsmanship, discretion, and the highest standards of finish.
            Every vehicle receives a treatment tailored to its unique needs.
          </motion.p>
        </PremiumCard>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <PremiumCard key={feature.title} className="p-7 h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-400">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-gray-300 leading-7">{feature.description}</p>
              </motion.div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailingSection;
