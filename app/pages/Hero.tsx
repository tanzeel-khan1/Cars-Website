"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(221,179,96,0.14),transparent_30%),linear-gradient(180deg,#070707_0%,#020202_100%)]">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(221,179,96,0.18),transparent_45%)]" />
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 max-w-3xl"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-gray-400">
            Luxury Detailing Studio
          </span>
          <h1 className="mt-6 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Exceptional Car Care for the Discerning Owner.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Discover a premium detailing experience that protects your vehicle, enhances every surface, and leaves a flawless showroom finish.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#ddb360] px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#e6c778]">
              Book Your Detail
              <MdArrowRight className="ml-2" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm text-white transition hover:border-white/30 hover:bg-white/10">
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pb-20"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
          <img src="Subtract.png" alt="Luxury car" className="h-[420px] w-full rounded-4xl object-cover object-center" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent rounded-b-[2.5rem]" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
