"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" />

      {/* Floating Particles - Restored */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl w-full"
        style={{ y, opacity }}
      >
        {/* Logo - Restored scale animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
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

        {/* Subtitle - Tight spacing */}
        <motion.p
          className="text-xs tracking-[0.25em] text-secondary mb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          WEI-YUAN (KEN) / 謙山敘事
        </motion.p>

        {/* Main Headline - Smaller size (3/4 of previous) */}
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="inline-block mx-1 md:mx-2 text-primary">設計力</span>
          <span className="inline-block mx-1 md:mx-2 text-secondary/50">·</span>
          <span className="inline-block mx-1 md:mx-2 text-primary">投資力</span>
          <span className="inline-block mx-1 md:mx-2 text-secondary/50">·</span>
          <span className="inline-block mx-1 md:mx-2 text-primary">傳承力</span>
        </motion.h1>

        {/* Tagline - Tight spacing */}
        <motion.p
          className="text-sm md:text-base font-serif text-accent mb-2 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          空間架構決策者
        </motion.p>

        {/* Description - Tight spacing */}
        <motion.p
          className="text-xs text-secondary leading-relaxed mb-4 max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          拒絕低效勞務，用系統定義規則。整合設計力、投資力與傳承力，
          為您建構兼具美學與價值的空間解決方案。
        </motion.p>

        {/* Three Identities - Restored stagger animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {pillars.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="px-4 py-2 border border-gray-200 hover:border-accent hover:bg-accent/5 transition-all duration-300 min-w-[100px]"
            >
              <span className="block text-sm font-medium text-primary">{item.name}</span>
              <span className="text-xs text-secondary">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Creator Info - Restored animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          {creatorInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              className="text-left min-w-[80px]"
            >
              <span className="block text-xs tracking-widest text-primary font-medium mb-0.5">
                {item.label}
              </span>
              <span className="text-xs text-secondary">{item.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}