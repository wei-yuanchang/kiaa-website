"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-primary text-white text-center">
      {/* Logo */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl tracking-[0.4em] font-semibold mb-2">WKY</p>
        <p className="text-sm text-white/60 tracking-widest">謙山敘事</p>
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-sm tracking-widest mb-2">KIAA — Wei-Yuan (Ken)</p>
        <p className="text-xs text-white/50 mb-6">謙山敘事 · Mountain Narrative</p>
      </motion.div>

      {/* Copyright */}
      <motion.p
        className="text-xs text-white/30 tracking-widest"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        © 2024 WKY. All rights reserved.
      </motion.p>
    </footer>
  );
}