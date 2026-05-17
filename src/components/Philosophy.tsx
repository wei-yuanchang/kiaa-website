"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-24 px-6 bg-gray-100 relative overflow-hidden">
      {/* Decorative top line */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-0 bg-accent"
        initial={{ height: 0 }}
        whileInView={{ height: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-light tracking-wider mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          DESIGN PHILOSOPHY
        </motion.h2>

        <motion.div
          className="text-xl md:text-2xl font-serif text-accent mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          建築是凝固的音樂
          <br />
          思想是流動的建築
        </motion.div>

        {/* Philosophy Text */}
        <motion.p
          className="text-base md:text-lg text-secondary leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          我相信好的設計源於對生活的深刻觀察。每一個建築構圖、每一篇文章、每一件作品，
          都是對「居住」這個根本問題的回應。當我們學會用心感受空間，光線會告訴你設計的答案。
        </motion.p>
      </div>
    </section>
  );
}