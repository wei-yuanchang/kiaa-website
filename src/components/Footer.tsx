"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-24 px-6 bg-[#1a1a1a] text-white text-center">
      {/* Premium Logo Section */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-2xl tracking-[0.4em] font-light mb-3 text-white">KIAA</p>
        <div className="w-12 h-[2px] bg-[#c9a227] mx-auto mb-4" />
        <p className="text-sm text-white/50 tracking-widest">謙山敘事 · Mountain Narrative</p>
      </motion.div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-sm tracking-[0.15em] mb-3">Wei-Yuan (Ken) · 張維元</p>
        <p className="text-xs text-white/40">建築 · 空間 · 系統</p>
      </motion.div>

      {/* Quick Links - Elegant */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex justify-center gap-8 mb-12"
      >
        {["敘事", "建築", "教育", "關於"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[11px] tracking-[0.2em] text-white/50 hover:text-[#c9a227] transition-colors uppercase"
          >
            {item}
          </a>
        ))}
      </motion.div>

      {/* Premium Divider */}
      <motion.div
        className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent mx-auto mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Copyright */}
      <motion.p
        className="text-[11px] text-white/30 tracking-[0.15em]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        © 2024 KIAA · 謙山敘事 · All rights reserved.
      </motion.p>
    </footer>
  );
}