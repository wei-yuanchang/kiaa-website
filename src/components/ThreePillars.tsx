"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    label: "思想",
    title: "謙山敘事",
    subtitle: "Mountain Narrative",
    description: "個人部落格，分享時事觀察、心情抒發與價值思考。在喧囂中尋找寧靜，在日常裡看見深度。",
    tags: ["時事觀察", "心情抒發", "價值觀"],
    href: "/lens-stories",
  },
  {
    number: "02",
    label: "設計",
    title: "謙一建築",
    subtitle: "Kenichi Architect",
    description: "建築設計事務所，專注於住宅、商業空間與室內設計。每一個專案都是對場所精神的探索。",
    tags: ["建築", "室內", "家具"],
    href: "/kenichi-architect",
  },
  {
    number: "03",
    label: "教育",
    title: "謙光學舍",
    subtitle: "Kenko",
    description: "建築設計教育平台，提供線上課程、文章與資源分享。傳承知識，培育下一代的設計者。",
    tags: ["建築教育", "線上課程", "資源"],
    href: "/kenko",
  },
];

export default function ThreePillars() {
  return (
    <section id="stories" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header - Premium spacing */}
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
          Three Pillars
        </motion.span>
        <h2 className="text-[28px] md:text-[36px] font-light tracking-tight text-[#1a1a1a] mb-4">
          三個品牌，一種信念
        </h2>
        <div className="w-12 h-[2px] bg-[#c9a227] mx-auto" />
      </motion.div>

      {/* Cards Grid - Premium cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.number}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.7 }}
            whileHover={{ y: -8 }}
          >
            {/* Card Image - Premium placeholder */}
            <motion.div
              className="aspect-[4/3] bg-gradient-to-br from-[#f5f4f0] to-[#e8e7e4] relative overflow-hidden mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              {/* Subtle overlay pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/5 to-transparent" />
              
              {/* Corner accent on hover */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 border-r border-t border-[#c9a227]/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Card Content - Refined typography */}
            <div className="space-y-3">
              <motion.span className="text-[11px] tracking-[0.25em] text-[#c9a227] uppercase">
                {pillar.number} — {pillar.label}
              </motion.span>
              
              <h3 className="text-xl font-serif font-light text-[#1a1a1a] group-hover:text-[#c9a227] transition-colors duration-300">
                {pillar.title}
              </h3>
              
              <p className="text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase">
                {pillar.subtitle}
              </p>
              
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                {pillar.description}
              </p>

              {/* Premium Tags */}
              <div className="flex flex-wrap gap-2 pt-3">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1.5 bg-[#f5f4f0] text-[#6b6b6b] tracking-wider group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Premium CTA */}
              <motion.div
                className="pt-5"
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}