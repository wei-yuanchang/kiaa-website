"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const systems = [
  {
    name: "謙程雲",
    description: "工程管理顧問系統",
    status: "線上運行中",
    href: "https://nw2p1en8gw9i.space.minimax.io/",
    icon: "engineering",
  },
  {
    name: "謙元土地評估",
    description: "土地價值評估系統",
    status: "本地運行中",
    href: "#", // localhost 無法從外部訪問
    icon: "land",
  },
];

export default function Systems() {
  return (
    <section id="systems" className="py-24 px-6 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto">
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
            Systems
          </motion.span>
          <h2 className="text-[28px] md:text-[36px] font-light tracking-tight text-[#1a1a1a] mb-4">
            謙璣玉衡
          </h2>
          <p className="text-sm text-[#6b6b6b] max-w-lg mx-auto mb-6">
            璇璣玉衡，以齊七政。如同觀測宇宙、釐清混亂的至高神器，校準現實、平衡利益與風險的精密系統。
          </p>
          <div className="w-12 h-[2px] bg-[#c9a227] mx-auto" />
        </motion.div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {systems.map((system, index) => (
            <motion.a
              key={system.name}
              href={system.href}
              target={system.href.startsWith("http") ? "_blank" : "_self"}
              rel={system.href.startsWith("http") ? "noopener noreferrer" : ""}
              className="group block p-8 bg-white border border-[#e8e7e4] hover:border-[#c9a227] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#fafaf8] flex items-center justify-center">
                  {system.icon === "engineering" && (
                    <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {system.icon === "land" && (
                    <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  )}
                </div>
                {system.href.startsWith("http") && (
                  <ExternalLink size={16} className="text-[#6b6b6b] group-hover:text-[#c9a227] transition-colors" />
                )}
              </div>
              
              <h3 className="text-lg font-medium text-[#1a1a1a] group-hover:text-[#c9a227] transition-colors mb-2">
                {system.name}
              </h3>
              <p className="text-sm text-[#6b6b6b] mb-4">{system.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-widest text-[#6b6b6b] uppercase">{system.status}</span>
                <ArrowRight size={14} className="text-[#c9a227] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-sm text-[#6b6b6b]">
            更多系統開發中敬請期待
          </p>
        </motion.div>
      </div>
    </section>
  );
}