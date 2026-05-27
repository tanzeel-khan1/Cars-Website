"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface PremiumSectionProps {
  children: ReactNode;
  className?: string;
  hasBackground?: boolean;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export function PremiumSection({ children, className = "", hasBackground = false }: PremiumSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className={`relative overflow-hidden ${className}`}
    >
      {hasBackground && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#ddb360]/5 via-transparent to-transparent pointer-events-none" />
      )}
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {children}
      </motion.div>
    </motion.section>
  );
}

export function PremiumCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative group rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 hover:bg-white/8 transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-[#ddb360]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export function PremiumHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`text-3xl md:text-5xl font-light text-white leading-tight ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function PremiumLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`text-xs uppercase tracking-[0.35em] text-gray-400 ${className}`}
    >
      {children}
    </motion.span>
  );
}
