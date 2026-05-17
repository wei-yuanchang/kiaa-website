"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "簡約",
    description: "Less is More. 去除一切不必要的裝飾，讓空間和文字回歸本質。",
  },
  {
    number: "02",
    title: "在地",
    description: "尊重場所精神，讓設計回應當地文化與氣候，而非追求全球化的一致性。",
  },
  {
    number: "03",
    title: "永續",
    description: "每一個選擇都影響未來。設計應當節能、健康、與環境和諧共存。",
  },
  {
    number: "04",
    title: "傳承",
    description: "知識需要流動。透過教育，將設計的智慧分享給下一個世代。",
  },
];

export default function CoreValues() {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto bg-white">
      {/* Section Header - Premium layout */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.span 
          className="text-[11px] tracking-[0.3em] text-[#c9a227] uppercase mb-4 block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Core Values
        </motion.span>
        <h2 className="text-[28px] md:text-[36px] font-light tracking-tight text-[#1a1a1a] mb-4">
          核心價值
        </h2>
        <div className="w-12 h-[2px] bg-[#c9a227] mx-auto" />
      </motion.div>

      {/* Values Grid - Premium cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.number}
            className="group text-left py-10 px-4 border-t border-[#e8e7e4] hover:border-[#c9a227] transition-colors duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {/* Number - Large and subtle */}
            <motion.span
              className="block text-5xl text-[#e8e7e4] font-light mb-6 group-hover:text-[#c9a227]/30 transition-colors duration-300"
            >
              {value.number}
            </motion.span>

            {/* Title */}
            <h3 className="text-lg font-serif font-light mb-3 text-[#1a1a1a] group-hover:text-[#c9a227] transition-colors duration-300">
              {value.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#6b6b6b] leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}