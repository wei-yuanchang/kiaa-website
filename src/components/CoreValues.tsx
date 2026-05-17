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
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-4">
          CORE VALUES
        </h2>
        <span className="block text-sm tracking-widest text-secondary mt-3">
          核心價值
        </span>
      </motion.div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={value.number}
            className="group text-left py-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{}}
          >
            {/* Number with hover animation */}
            <motion.span
              className="block text-4xl text-gray-300 font-light mb-4 group-hover:text-accent group-hover:scale-110 transition-all duration-300"
              transition={{ type: "spring", stiffness: 300 }}
            >
              {value.number}
            </motion.span>

            {/* Title */}
            <h3 className="text-xl font-serif font-light mb-3 group-hover:text-accent transition-colors duration-300">
              {value.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-secondary leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}