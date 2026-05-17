"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Geometric Animation Components for each brand
const MountainWaves = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
    <motion.path
      d="M0 80 Q25 50 50 70 T100 60 T150 50 T200 65"
      stroke="#c9a227"
      strokeWidth="1.5"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.path
      d="M0 90 Q30 65 60 80 T120 70 T180 60 T200 75"
      stroke="#c9a227"
      strokeWidth="1"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
    />
    <motion.circle
      cx="160" cy="30" r="8"
      fill="#c9a227"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
);

const ArchitecturalGrid = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
    {/* Vertical lines */}
    {[40, 80, 120, 160].map((x, i) => (
      <motion.line
        key={`v-${i}`}
        x1={x} y1="10" x2={x} y2="110"
        stroke="#c9a227"
        strokeWidth="1"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: i * 0.15, repeat: Infinity, repeatType: "reverse" }}
        style={{ originY: "0" }}
      />
    ))}
    {/* Horizontal lines */}
    {[30, 60, 90].map((y, i) => (
      <motion.line
        key={`h-${i}`}
        x1="20" y1={y} x2="180" y2={y}
        stroke="#c9a227"
        strokeWidth="1"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: i * 0.2 + 0.3, repeat: Infinity, repeatType: "reverse" }}
        style={{ originX: "0" }}
      />
    ))}
    {/* Corner accent */}
    <motion.rect
      x="70" y="45" width="60" height="40" rx="2"
      stroke="#c9a227"
      strokeWidth="2"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
);

const FlowingPages = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
    {/* Book pages flowing */}
    {[0, 1, 2, 3].map((i) => (
      <motion.path
        key={i}
        d={`M${60 + i * 20} 20 Q${70 + i * 20} 60 ${60 + i * 20} 100`}
        stroke="#c9a227"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 - i * 0.1 }}
        transition={{ 
          duration: 2, 
          delay: i * 0.3, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    ))}
    {/* Central line */}
    <motion.line
      x1="100" y1="15" x2="100" y2="105"
      stroke="#c9a227"
      strokeWidth="2"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      style={{ originY: "0.5" }}
    />
  </svg>
);

const CosmicParticles = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
    {/* Stars/particles */}
    {[...Array(12)].map((_, i) => {
      const x = 30 + (i % 4) * 45 + Math.random() * 20;
      const y =20 + Math.floor(i / 4) * 35 + Math.random() * 15;
      return (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={2 + Math.random() * 2}
          fill="#c9a227"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{ 
            duration: 2 + Math.random(), 
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      );
    })}
    {/* Orbit ring */}
    <motion.ellipse
      cx="100" cy="60" rx="50" ry="25"
      stroke="#c9a227"
      strokeWidth="1"
      fill="none"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{ originX: "100px", originY: "60px" }}
    />
    {/* Center core */}
    <motion.circle
      cx="100" cy="60" r="12"
      fill="#c9a227"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
);

const pillars = [
  {
    number: "01",
    label: "思想",
    title: "謙山敘事",
    subtitle: "Mountain Narrative",
    description: "個人部落格，分享時事觀察、心情抒發與價值思考。在喧囂中尋找寧靜，在日常裡看見深度。",
    tags: ["時事觀察", "心情抒發", "價值觀"],
    href: "/lens-stories",
    animation: MountainWaves,
  },
  {
    number: "02",
    label: "設計",
    title: "謙一築境",
    subtitle: "Kenichi Space",
    description: "建築設計事務所，專注於住宅、商業空間與室內設計。為業主打造有氛圍的精神境界。",
    tags: ["建築", "室內", "築境"],
    href: "/kenichi-architect",
    animation: ArchitecturalGrid,
  },
  {
    number: "03",
    label: "教育",
    title: "謙光書院",
    subtitle: "Kenko Academy",
    description: "建築設計教育平台，提供線上課程、文章與資源分享。傳承知識，培育下一代的設計者。",
    tags: ["建築教育", "線上課程", "資源"],
    href: "/kenko",
    animation: FlowingPages,
  },
  {
    number: "04",
    label: "創意",
    title: "謙境方外",
    subtitle: "Beyond the Realm",
    description: "仙俠與乾坤宇宙，世俗之外的神仙境界。一芥子藏大千，裡面裝著宏大的奇幻史詩。",
    tags: ["小說", "奇幻", "仙俠"],
    href: "/yijie",
    animation: CosmicParticles,
  },
];

export default function ThreePillars() {
  return (
    <section id="stories" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.span 
          className="text-[11px] tracking-[0.3em] text-[#c9a227] uppercase mb-4 block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Four Pillars
        </motion.span>
        <h2 className="text-[28px] md:text-[36px] font-light tracking-tight text-[#1a1a1a] mb-4">
          四個品牌，一種信念
        </h2>
        <div className="w-12 h-[2px] bg-[#c9a227] mx-auto" />
      </motion.div>

      {/* Cards Grid - 2x2 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar, index) => {
          const AnimationComponent = pillar.animation;
          return (
            <motion.div
              key={pillar.number}
              className="group cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              whileHover={{ y: -8 }}
            >
              {/* Geometric Animation Container */}
              <motion.div
                className="aspect-[16/9] bg-gradient-to-br from-[#fafaf8] to-[#f0efeb] relative overflow-hidden mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                {/* Geometric animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimationComponent />
                </div>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/3 to-transparent" />
                
                {/* Corner accent on hover */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-[#c9a227]/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Number overlay */}
                <span className="absolute top-4 left-4 text-5xl font-light text-[#c9a227]/10">
                  {pillar.number}
                </span>
              </motion.div>

              {/* Card Content - Fixed height for alignment */}
              <div className="flex flex-col flex-1 min-h-[200px]">
                <motion.span className="text-[11px] tracking-[0.25em] text-[#c9a227] uppercase mb-2">
                  {pillar.label}
                </motion.span>
                
                <h3 className="text-xl font-serif font-light text-[#1a1a1a] group-hover:text-[#c9a227] transition-colors duration-300 mb-1">
                  {pillar.title}
                </h3>
                
                <p className="text-[11px] tracking-[0.15em] text-[#6b6b6b] uppercase mb-3">
                  {pillar.subtitle}
                </p>
                
                <p className="text-sm text-[#6b6b6b] leading-relaxed mb-auto">
                  {pillar.description}
                </p>

                {/* Bottom section - always aligned */}
                <div className="mt-6">
                  {/* Premium Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-3 py-1.5 bg-[#f5f4f0] text-[#6b6b6b] tracking-wider group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Premium CTA */}
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a] group-hover:text-[#c9a227] transition-colors"
                    >
                      探索
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={14} />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}