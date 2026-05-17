"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: "eyess.png",
    title: "Precision Work",
    description: "We uphold the highest standards of care when servicing every luxury vehicle.",
  },
  {
    icon: "dia.png",
    title: "Premium Products",
    description: "Only professional-grade coatings, cleaners, and protection systems are used.",
  },
  {
    icon: "security.png",
    title: "Privacy First",
    description: "Discreet service and secure handling are guaranteed for every client.",
  },
];

export default function ServicePage() {
  return (
    <section className="bg-black px-6 py-28 text-white md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Service</p>
          <h1 className="mt-4 text-4xl font-light leading-tight text-white sm:text-5xl">
            Superior detailing built around your vehicle's needs.
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-300">
            From exterior finish to interior restoration, every service is tailored to deliver a premium experience.
          </p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-4xl border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
          >
            <h2 className="text-3xl font-semibold">What we offer</h2>
            <p className="mt-5 text-gray-300 leading-8">
              Every service begins with a detailed inspection, followed by a curated care plan to preserve and enhance your vehicle.
            </p>
            <div className="mt-10 space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="rounded-3xl border border-white/10 bg-black/60 p-6">
                  <div className="flex items-center gap-4">
                    <img src={feature.icon} alt={feature.title} className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 p-2" />
                    <div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-gray-300 leading-7">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(221,179,96,0.12),transparent_45%)] p-10 shadow-[0_30px_90px_rgba(0,0,0,0.22)]"
          >
            <h2 className="text-3xl font-semibold">Service experience</h2>
            <p className="mt-5 text-gray-300 leading-8">
              Benefit from thoughtful scheduling, expert care, and a boutique approach to luxury car maintenance.
            </p>
            <ul className="mt-8 space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#ddb360]" />
                Expert surface prep, polish, and protective finishes.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#ddb360]" />
                Interior sanitization and deep rejuvenation for leather, cloth, and trim.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#ddb360]" />
                Detail reports, product recommendations, and premium aftercare guidance.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
