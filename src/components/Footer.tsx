"use client";

import { motion } from "framer-motion";

export default function Footer() {
  // Creator info - moved from Hero to Footer as requested
  const creatorInfo = [
    { label: "創作者", value: "張維元 (Ken)" },
    { label: "專業", value: "建築 · 空間 · 系統" },
    { label: "地點", value: "台中" },
  ];

  return (
    <footer className="py-20 px-6 bg-[#1a1a1a] text-white text-center">
      {/* Creator Info Section - Prominently displayed at bottom */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {creatorInfo.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-center min-w-[100px]"
          >
            <span className="block text-[10px] tracking-[0.25em] text-white/40 font-medium mb-2 uppercase">
              {item.label}
            </span>
            <span className="text-sm text-white">{item.value}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Premium Divider */}
      <motion.div
        className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent mx-auto mb-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Logo Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl tracking-[0.4em] font-light mb-3 text-white">KIAA</p>
        <div className="w-10 h-[1px] bg-[#c9a227] mx-auto mb-3" />
        <p className="text-xs text-white/50 tracking-widest">謙山敘事 · Mountain Narrative</p>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex justify-center gap-8 mb-10"
      >
        {["敘事", "建築", "教育", "關於"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[10px] tracking-[0.2em] text-white/50 hover:text-[#c9a227] transition-colors uppercase"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.p
        className="text-[10px] text-white/25 tracking-[0.15em]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        © 2024 KIAA · 謙山敘事 · All rights reserved.
      </motion.p>
    </footer>
  );
}