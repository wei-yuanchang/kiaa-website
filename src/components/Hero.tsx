"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Three pillars
  const pillars = [
    { name: "謙山敘事", label: "思想" },
    { name: "謙光學舍", label: "教育" },
    { name: "謙一建築", label: "設計" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Premium Background - Subtle gradient with warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fafaf8] to-[#f5f4f0]" />
      
      {/* Elegant corner accents with animation */}
      <motion.div 
        className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#e8e7e4]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#e8e7e4]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      />

      {/* Floating Particles - Sophisticated gold specks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-[#c9a227]/30 rounded-full"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 25 + (i % 3) * 15, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-8 max-w-5xl w-full"
        style={{ y, opacity }}
      >
        {/* Subtitle */}
        <motion.p
          className="text-[10px] tracking-[0.35em] text-[#6b6b6b] mb-6 uppercase"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          WEI-YUAN (KEN) · 謙山敘事
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          className="text-[24px] md:text-[36px] lg:text-[44px] font-light tracking-tight text-[#1a1a1a] mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {["設計力", "·", "投資力", "·", "傳承力"].map((text, i) => (
            <motion.span
              key={i}
              className={text === "·" ? "text-[#c9a227]" : "text-[#1a1a1a]"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
            >
              <span className="inline-block mx-1 md:mx-2">{text}</span>
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-base md:text-lg font-serif text-[#c9a227] mb-6 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          空間架構決策者
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-xs md:text-sm text-[#6b6b6b] leading-relaxed mb-6 max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          拒絕低效勞務，用系統定義規則。整合設計力、投資力與傳承力，
          <br className="hidden md:block" />為您建構兼具美學與價值的空間解決方案。
        </motion.p>

        {/* Premium Divider */}
        <motion.div
          className="w-12 h-[1px] bg-[#c9a227] mx-auto mb-8"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        />

        {/* Three Identities */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-5"
          initial="hidden"
          animate="visible"
        >
          {pillars.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -8, 
                scale: 1.03, 
                borderColor: '#c9a227',
                boxShadow: "0 10px 40px rgba(201, 162, 39, 0.15)"
              }}
              className="px-4 py-3 border border-[#e8e7e4] hover:bg-[#c9a227]/[0.03] transition-all duration-300 min-w-[110px] md:min-w-[130px]"
            >
              <motion.span 
                className="block text-sm font-medium text-[#1a1a1a] mb-0.5"
                whileHover={{ color: '#c9a227' }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.span>
              <span className="text-[10px] tracking-widest text-[#6b6b6b]">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Logo - Inverted style (white on dark) */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="w-16 h-16 border border-white/40 flex items-center justify-center">
          <Image
            src="/kiaa-website/logo-kiaa.png"
            alt="KIAA"
            width={40}
            height={40}
            className="brightness-0 invert opacity-80"
          />
        </div>
      </motion.div>
    </section>
  );
}