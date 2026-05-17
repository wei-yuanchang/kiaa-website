"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-32 px-6 bg-[#fafaf8] relative overflow-hidden">
      {/* Decorative top line - elegant accent */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-0 bg-gradient-to-b from-[#c9a227] to-transparent"
        initial={{ height: 0 }}
        whileInView={{ height: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Section Label */}
        <motion.span
          className="text-[11px] tracking-[0.3em] text-[#c9a227] uppercase mb-6 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Design Philosophy
        </motion.span>

        {/* Main Quote - Serif typography */}
        <motion.div
          className="text-xl md:text-2xl lg:text-3xl font-serif text-[#1a1a1a] mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          建築是凝固的音樂
          <br />
          思想是流動的建築
        </motion.div>

        {/* Premium Divider */}
        <motion.div
          className="w-16 h-[2px] bg-[#c9a227] mx-auto mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        {/* Philosophy Text - Refined paragraph */}
        <motion.p
          className="text-base md:text-lg text-[#6b6b6b] leading-[1.9] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          我相信好的設計源於對生活的深刻觀察。每一個建築構圖、每一篇文章、每一件作品，
          都是對「居住」這個根本問題的回應。當我們學會用心感受空間，光線會告訴你設計的答案。
        </motion.p>
      </div>

      {/* Decorative bottom corners */}
      <motion.div
        className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-[#e8e7e4]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-[#e8e7e4]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
    </section>
  );
}