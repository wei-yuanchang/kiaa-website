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

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

export default function ThreePillars() {
  return (
    <section id="stories" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-4">
          THREE PILLARS
        </h2>
        <span className="block text-sm tracking-widest text-secondary mt-3">
          三個品牌，一種信念
        </span>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.number}
            className="group cursor-pointer"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            {/* Card Image */}
            <motion.div
              className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden mb-6"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
              transition={{ duration: 0.4 }}
            >
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              
              {/* Decorative line on hover */}
              <motion.div
                className="absolute inset-0 bg-accent/5 origin-bottom"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Card Content */}
            <div className="space-y-3">
              <span className="text-xs tracking-[0.2em] text-accent">
                {pillar.number} — {pillar.label}
              </span>
              
              <h3 className="text-2xl font-serif font-light group-hover:text-accent transition-colors duration-300">
                {pillar.title}
              </h3>
              
              <p className="text-xs tracking-widest text-secondary">
{pillar.subtitle}
              </p>
              
              <p className="text-sm text-secondary leading-relaxed">
                {pillar.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-gray-100 text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                className="pt-4"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href={pillar.href}
                  className="inline-flex items-center gap-2 text-xs tracking-widest group-hover:text-accent transition-colors"
                >
                  探索
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
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