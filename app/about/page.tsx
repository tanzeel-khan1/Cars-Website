"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardFade = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={fadeUp}
        className="pt-28 px-6 md:px-20 lg:px-32 pb-16"
      >
        <div className="max-w-6xl mx-auto">
          <span className="text-sm uppercase tracking-[0.35em] text-gray-400">
            About LuxurDetails
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-6 text-4xl md:text-6xl font-light leading-tight"
          >
            Crafted for clients who demand the highest standard of luxury auto detailing.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-gray-300 leading-8 text-base md:text-lg"
          >
            We are a premium car detailing studio dedicated to elevating every vehicle with precision, care, and timeless style.
            From showroom finishes to preservation services, our team treats every car as a masterpiece.
          </motion.p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Our Promise",
                description:
                  "Transparent pricing, premium products, and flawless results for every service.",
              },
              {
                title: "Expert Team",
                description:
                  "Skilled detailers trained to preserve paint, polish chrome, and refresh interiors with care.",
              },
              {
                title: "Luxury Experience",
                description:
                  "A seamless customer journey from booking to vehicle delivery, tailored to your lifestyle.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15 * index }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                <p className="text-gray-300 leading-7">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={fadeUp}
        className="border-t border-white/10 py-16 px-6 md:px-20 lg:px-32"
      >
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">How we work</h2>
            <div className="space-y-6 text-gray-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h3 className="text-lg font-medium">1. Consultation</h3>
                <p className="mt-2 leading-7">
                  We begin with a detailed evaluation of your car’s condition, recommending the best package for your needs.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-lg font-medium">2. Premium Care</h3>
                <p className="mt-2 leading-7">
                  Every vehicle receives professional surface prep, protective detailing, and a precision finish.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h3 className="text-lg font-medium">3. Delivery</h3>
                <p className="mt-2 leading-7">
                  Your car returns to you refreshed, protected, and ready to make a lasting impression.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-[0_30px_120px_rgba(255,255,255,0.04)]"
          >
            <h3 className="text-2xl font-semibold mb-4">Ready to upgrade your car’s shine?</h3>
            <p className="text-gray-300 leading-7 mb-8">
              Discover why discerning owners choose LuxurDetails for consistently polished results and impeccable service.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-sm font-medium transition hover:bg-white hover:text-black">
              Contact us now
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
