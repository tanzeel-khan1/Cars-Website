"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.main
      className="min-h-screen bg-black px-6 py-28 text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-4xl border border-white/10 bg-white/5 p-14 shadow-[0_40px_100px_rgba(0,0,0,0.35)] text-center">
        <span className="mb-3 text-sm uppercase tracking-[0.4em] text-gray-500">Page not found</span>
        <h1 className="text-7xl font-semibold text-white">404</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300">
          The page you were looking for cannot be found. Return to the premium detailing experience and continue exploring.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#ddb360] px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#e6c778]"
        >
          Back to Home
        </Link>
      </div>
    </motion.main>
  );
}
