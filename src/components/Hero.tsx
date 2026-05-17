"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Split text animation for new tagline
  const headline = "設計力 · 投資力 · 傳承力";
  const words = headline.split(" · ");

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-100" />

      {/* Floating Particles */}
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
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl"
        style={{ y, opacity }}
      >
        {/* Logo with scale animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <Image
            src="/kiaa-website/logo-kiaa.png"
            alt="KIAA Logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xs tracking-[0.3em] text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          WEI-YUAN (KEN) / 謙山敘事
        </motion.p>

        {/* Animated Headline - Three Powers */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mx-2 md:mx-4">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  className="inline-block"
                  initial={{ 
                    filter: "blur(10px)", 
                    opacity: 0, 
                    y: 40 
                  }}
                  animate={{ 
                    filter: "blur(0px)", 
                    opacity: 1, 
                    y: 0 
                  }}
                  transition={{
                    delay: 0.5 + (wordIndex * 4 + charIndex) * 0.05,
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Main Tagline - New Brand Message */}
        <motion.p
          className="text-lg md:text-xl font-serif text-accent mb-6 leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          空間架構決策者
        </motion.p>

        {/* Description - New Brand Story */}
        <motion.p
          className="max-w-xl mx-auto text-secondary leading-relaxed mb-8 text-base md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          拒絕低效勞務，用系統定義規則。整合設計力、投資力與傳承力，
          為您建構兼具美學與價值的空間解決方案。
        </motion.p>

        {/* Three Identities */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {[
            { name: "謙山敘事", desc: "思想" },
            { name: "謙光學舍", desc: "教育" },
            { name: "謙一建築", desc: "設計" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 + index * 0.1 }}
              className="px-4 py-2 border border-gray-200 hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <span className="block text-sm font-medium text-primary">{item.name}</span>
              <span className="text-xs text-secondary">{item.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Creator Info */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {[
            { label: "創作者", value: "張維元 (Ken)" },
            { label: "專業", value: "建築 · 空間 · 系統" },
            { label: "地點", value: "台中" },
          ].map((item, index) => (
            <motion.p
              key={item.label}
              className="text-sm text-secondary text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 + index * 0.1 }}
            >
              <span className="block text-xs tracking-widest text-primary font-medium mb-1">
                {item.label}
              </span>
              {item.value}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs tracking-[0.3em] text-secondary">SCROLL</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-accent to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}