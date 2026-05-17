"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Three pillars
  const pillars = [
    { name: "謙山敘事", label: "思想" },
    { name: "謙光學舍", label: "教育" },
    { name: "謙一建築", label: "設計" },
  ];

  // Creator info
  const creatorInfo = [
    { label: "創作者", value: "張維元 (Ken)" },
    { label: "專業", value: "建築 · 空間 · 系統" },
    { label: "地點", value: "台中" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl w-full"
        style={{ y, opacity }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <Image
            src="/kiaa-website/logo-kiaa.png"
            alt="KIAA Logo"
            width={80}
            height={80}
            className="mx-auto"
            priority
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xs tracking-[0.25em] text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          WEI-YUAN (KEN) / 謙山敘事
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="inline-block mx-1 md:mx-3 text-primary">設計力</span>
          <span className="inline-block mx-1 md:mx-3 text-secondary">·</span>
          <span className="inline-block mx-1 md:mx-3 text-primary">投資力</span>
          <span className="inline-block mx-1 md:mx-3 text-secondary">·</span>
          <span className="inline-block mx-1 md:mx-3 text-primary">傳承力</span>
        </motion.h1>

        {/* Tagline - Centered */}
        <motion.p
          className="text-base md:text-lg font-serif text-accent mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          空間架構決策者
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-sm text-secondary leading-relaxed mb-8 max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          拒絕低效勞務，用系統定義規則。整合設計力、投資力與傳承力，
          為您建構兼具美學與價值的空間解決方案。
        </motion.p>

        {/* Three Identities - Consistent Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {pillars.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              className="px-5 py-3 border border-gray-200 hover:border-accent hover:bg-accent/5 transition-all duration-300 min-w-[120px]"
            >
              <span className="block text-sm font-medium text-primary">{item.name}</span>
              <span className="text-xs text-secondary">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Creator Info - Grid with consistent widths */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          {creatorInfo.map((item, index) => (
            <div
              key={item.label}
              className="text-left min-w-[100px]"
            >
              <span className="block text-xs tracking-widest text-primary font-medium mb-1">
                {item.label}
              </span>
              <span className="text-sm text-secondary">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Moved down, not overlapping */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="text-xs tracking-[0.25em] text-secondary/60">SCROLL</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}