"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header - Premium layout */}
        <motion.div 
          className="text-center mb-24"
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
            About
          </motion.span>
          <h2 className="text-[28px] md:text-[36px] font-light tracking-tight text-[#1a1a1a] mb-4">
            關於維元
          </h2>
          <div className="w-12 h-[2px] bg-[#c9a227] mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Brand Story */}
            <div className="mb-12">
              <h3 className="text-xl font-serif font-light mb-6 text-[#c9a227]">品牌故事</h3>
              <div className="space-y-5 text-[#6b6b6b] leading-[1.9]">
                <p>
                  我是張維元 (Ken)，一位拒絕低效勞務、用系統定義規則的空間架構決策者。
                </p>
                <p>
                  在建築設計、數位創作與教育的多重身份中，我找到了自己的定位——
                  不是單向輸出，而是與空間、與使用者、與自然環境的持續對話。
                </p>
                <p>
                  我的設計哲學源自「密涅瓦思維」：每一次決定之前，先問自己——
                  這個選擇的機會成本是什麼？真正的系統動力在哪裡？
                </p>
              </div>
            </div>

            {/* Core Philosophy - Premium card */}
            <div className="p-8 bg-[#fafaf8] border-l-2 border-[#c9a227]">
              <h4 className="text-base font-serif text-[#1a1a1a] mb-4">核心理念</h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed mb-4">
                「內實外虛、謙下歸一」——這不只是設計原則，更是一種生活哲學。
              </p>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                我相信好的設計源於對自我的深刻理解。每一個專案都是一場探索與對話，
                而真正的創新，往往發生在系統與直覺的交界處。
              </p>
            </div>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Professional Background */}
            <div>
              <h3 className="text-xl font-serif font-light mb-6 text-[#c9a227]">專業背景</h3>
              <div className="space-y-5">
                {[
                  { title: "建築設計", desc: "專注於住宅、商業空間與室內設計，每個專案都是對場所精神的探索" },
                  { title: "數位創作", desc: "結合 AI 工具與設計系統，用代碼建構創意解決方案" },
                  { title: "教育傳承", desc: "透過線上課程與文章分享，將設計智慧傳遞給下一個世代" },
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <span className="text-[11px] tracking-[0.2em] text-[#c9a227] mt-1 uppercase">0{index + 1}</span>
                    <div>
                      <h4 className="text-base font-medium text-[#1a1a1a] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Design Traits - Premium grid */}
            <div>
              <h3 className="text-xl font-serif font-light mb-6 text-[#c9a227]">設計特質</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "人類圖類型", value: "顯示生產者" },
                  { label: "人生角色", value: "2/4（隱士 / 橋樑）" },
                  { label: "馬雅印記", value: "藍鷹（宏觀視野）" },
                  { label: "非自己主題", value: "挫敗感 → 回應" },
                ].map((item, index) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-5 border border-[#e8e7e4] hover:border-[#c9a227] hover:bg-[#c9a227]/[0.02] transition-colors duration-300"
                  >
                    <span className="block text-[11px] tracking-[0.2em] text-[#6b6b6b] mb-2 uppercase">{item.label}</span>
                    <span className="text-sm text-[#1a1a1a] font-medium">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Three Identities Preview */}
            <div>
              <h3 className="text-xl font-serif font-light mb-6 text-[#c9a227]">三個身份</h3>
              <div className="space-y-3">
                {[
                  { name: "謙山敘事", en: "Mountain Narrative", priority: "優先" },
                  { name: "謙光學舍", en: "Kenko", priority: "其次" },
                  { name: "謙一建築", en: "Kenichi Architect", priority: "其三" },
                ].map((item, index) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center justify-between p-4 bg-[#fafaf8] hover:bg-[#f5f4f0] transition-colors duration-300 group"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#c9a227] transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-[#6b6b6b]">{item.en}</span>
                    </div>
                    <span className="text-[11px] tracking-[0.15em] text-[#c9a227] uppercase">{item.priority}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Section - Premium styling */}
        <motion.div 
          className="mt-28 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-serif text-[#1a1a1a] leading-relaxed mb-6">
              「我是張維元，拒絕低效勞務、用系統定義規則，
              整合『設計力、投資力、傳承力』的空間架構決策者。」
            </p>
            <div className="w-12 h-[2px] bg-[#c9a227] mx-auto mb-4" />
            <cite className="text-[11px] tracking-[0.2em] text-[#6b6b6b] not-italic uppercase">
              — 維元，2024
            </cite>
          </blockquote>
        </motion.div>

        {/* Contact CTA - Premium button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-[#6b6b6b] mb-5">想了解更多，或有任何合作機會</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white text-[11px] tracking-[0.2em] uppercase hover:bg-[#c9a227] transition-colors duration-300"
          >
            取得聯繫
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}