"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

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
      {/* Premium Background - Subtle gradient with warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fafaf8] to-[#f5f4f0]" />
      
      {/* Elegant corner accents */}
      <motion.div 
        className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#e8e7e4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#e8e7e4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />

      {/* Floating Particles - Sophisticated gold specks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-[#c9a227]/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20 + (i % 2) * 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 14 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
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
        {/* Logo with premium entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/kiaa-website/logo-kiaa.png"
            alt="KIAA Logo"
            width={72}
            height={72}
            className="mx-auto drop-shadow-sm"
            priority
          />
        </motion.div>

        {/* Subtitle - Elegant spacing */}
        <motion.p
          className="text-[11px] tracking-[0.3em] text-[#6b6b6b] mb-6 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          WEI-YUAN (KEN) · 謙山敘事
        </motion.p>

        {/* Main Headline - Premium typography */}
        <motion.h1
          className="text-[28px] md:text-[40px] lg:text-[48px] font-light tracking-tight text-[#1a1a1a] mb-6 leading-tight"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="inline-block mx-2 md:mx-3 text-[#1a1a1a]">設計力</span>
          <span className="inline-block mx-2 md:mx-3 text-[#c9a227]">·</span>
          <span className="inline-block mx-2 md:mx-3 text-[#1a1a1a]">投資力</span>
          <span className="inline-block mx-2 md:mx-3 text-[#c9a227]">·</span>
          <span className="inline-block mx-2 md:mx-3 text-[#1a1a1a]">傳承力</span>
        </motion.h1>

        {/* Tagline - Serif accent */}
        <motion.p
          className="text-lg md:text-xl font-serif text-[#c9a227] mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          空間架構決策者
        </motion.p>

        {/* Description - Refined paragraph */}
        <motion.p
          className="text-sm md:text-base text-[#6b6b6b] leading-relaxed mb-10 max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          拒絕低效勞務，用系統定義規則。整合設計力、投資力與傳承力，
          <br className="hidden md:block" />為您建構兼具美學與價值的空間解決方案。
        </motion.p>

        {/* Premium Divider */}
        <motion.div
          className="w-16 h-[2px] bg-[#c9a227] mx-auto mb-10"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Three Identities - Premium cards with stagger */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-5 mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
        >
          {pillars.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02, borderColor: '#c9a227' }}
              className="px-5 py-4 border border-[#e8e7e4] hover:bg-[#c9a227]/[0.03] transition-all duration-300 min-w-[120px] md:min-w-[140px]"
              style={{ boxShadow: '0 0 0 transparent' }}
            >
              <span className="block text-base font-medium text-[#1a1a1a] mb-1">{item.name}</span>
              <span className="text-xs tracking-widest text-[#6b6b6b]">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Creator Info - Refined layout */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          {creatorInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
              className="text-center min-w-[90px]"
            >
              <span className="block text-[11px] tracking-[0.2em] text-[#6b6b6b] font-medium mb-1 uppercase">
                {item.label}
              </span>
              <span className="text-sm text-[#1a1a1a]">{item.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator - subtle and elegant */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-[#c9a227]/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}