"use client";

import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-4">ABOUT</h2>
          <span className="block text-sm tracking-widest text-secondary mt-3">關於維元</span>
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
            <div className="mb-16">
              <h3 className="text-2xl font-serif font-light mb-6 text-accent">品牌故事</h3>
              <div className="space-y-4 text-secondary leading-relaxed">
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
                <p>
                  藍鷹的宏觀視野讓我看見建築不只是結構，而是生活與記憶的容器。
                </p>
              </div>
            </div>

            {/* Core Philosophy */}
            <div className="p-8 bg-gray-100 rounded-sm">
              <h4 className="text-lg font-serif text-primary mb-4">核心理念</h4>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                「內實外虛、謙下歸一」——這不只是設計原則，更是一種生活哲學。
              </p>
              <p className="text-secondary text-sm leading-relaxed">
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
              <h3 className="text-2xl font-serif font-light mb-6 text-accent">專業背景</h3>
              <div className="space-y-4">
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
                    <span className="text-xs tracking-widest text-accent mt-1">0{index + 1}</span>
                    <div>
                      <h4 className="text-lg font-medium text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Design Traits */}
            <div>
              <h3 className="text-2xl font-serif font-light mb-6 text-accent">設計特質</h3>
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
                    className="p-4 border border-gray-200 hover:border-accent transition-colors duration-300"
                  >
                    <span className="block text-xs tracking-widest text-secondary mb-1">{item.label}</span>
                    <span className="text-sm text-primary font-medium">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Three Identities Preview */}
            <div>
              <h3 className="text-2xl font-serif font-light mb-6 text-accent">三個身份</h3>
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
                    className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-xs text-secondary">{item.en}</span>
                    </div>
                    <span className="text-xs tracking-widest text-accent">{item.priority}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-serif text-primary leading-relaxed mb-4">
              「我是張維元，拒絕低效勞務、用系統定義規則，
              整合『設計力、投資力、傳承力』的空間架構決策者。」
            </p>
            <cite className="text-sm tracking-widest text-secondary not-italic">
              — 維元，2024
            </cite>
          </blockquote>
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-secondary mb-4">想了解更多，或有任何合作機會</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm tracking-widest hover:bg-accent transition-colors duration-300"
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