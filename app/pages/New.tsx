"use client";
import { motion } from "framer-motion";

const DetailingSection = () => {
  const features = [
    {
      title: "Precision Finish",
      description: "Every panel is polished, protected, and perfected for a showroom-ready appearance.",
    },
    {
      title: "Premium Protection",
      description: "Ceramic coatings, paint sealants and interior protection delivered with expert care.",
    },
    {
      title: "White Glove Service",
      description: "Personalized pickup, delivery, and concierge-grade customer support.",
    },
  ];

  return (
    <section className="bg-black px-6 pb-20 pt-10 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 rounded-4xl border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.15)]"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">What makes us different</p>
          <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
            Exclusive detailing built for high-end vehicles.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300">
            Our work is driven by craftsmanship, discretion, and the highest standards of finish.
            Every vehicle receives a treatment tailored to its unique needs.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="rounded-4xl border border-white/10 bg-white/5 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-400">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-gray-300 leading-7">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailingSection;
