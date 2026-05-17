"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#fafaf8]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header - Premium layout */}
        <motion.div
          className="text-center mb-20"
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
            Contact
          </motion.span>
          <h2 className="text-[28px] md:text-[36px] font-light tracking-tight text-[#1a1a1a] mb-4">
            取得聯繫
          </h2>
          <div className="w-12 h-[2px] bg-[#c9a227] mx-auto mb-6" />
          <p className="text-[#6b6b6b] text-sm max-w-md mx-auto">
            無論是建築設計、課程諮詢或合作機會，歡迎與我聯繫。
          </p>
        </motion.div>

        {/* Contact Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {[
                { label: "電子郵件", value: "weiyuan@kiaa.design", icon: "email" },
                { label: "所在地", value: "台灣，台中", icon: "location" },
                { label: "可用時間", value: "平日 10:00 - 18:00", icon: "clock" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 p-5 bg-white border border-[#e8e7e4] hover:border-[#c9a227] transition-colors duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#fafaf8]">
                    {item.icon === "email" && (
                      <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {item.icon === "location" && (
                      <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {item.icon === "clock" && (
                      <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <span className="block text-[11px] tracking-[0.15em] text-[#6b6b6b] uppercase mb-1">{item.label}</span>
                    <span className="text-sm text-[#1a1a1a]">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-[#1a1a1a] mb-4 tracking-wide">關注我</h4>
              <div className="flex gap-4">
                {[
                  { name: "Instagram", href: "#" },
                  { name: "LinkedIn", href: "#" },
                  { name: "Medium", href: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase border border-[#e8e7e4] text-[#6b6b6b] hover:border-[#c9a227] hover:text-[#c9a227] transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <motion.div
                className="text-center py-16 px-8 bg-white border border-[#c9a227]/30"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-[#c9a227]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-serif text-[#1a1a1a] mb-3">訊息已傳送</h4>
                <p className="text-[#6b6b6b] text-sm">感謝您的訊息，我會盡快回覆您。</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 border border-[#e8e7e4]">
                {/* Name */}
                <div>
                  <label className="block text-[11px] tracking-[0.15em] text-[#6b6b6b] uppercase mb-2">姓名</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-[#e8e7e4] focus:border-[#c9a227] focus:outline-none transition-colors duration-300"
                    placeholder="您的姓名"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] tracking-[0.15em] text-[#6b6b6b] uppercase mb-2">電子郵件</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-[#e8e7e4] focus:border-[#c9a227] focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[11px] tracking-[0.15em] text-[#6b6b6b] uppercase mb-2">主旨</label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-[#e8e7e4] focus:border-[#c9a227] focus:outline-none transition-colors duration-300 bg-white"
                  >
                    <option value="">選擇聯繫目的</option>
                    <option value="architecture">建築設計諮詢</option>
                    <option value="education">課程相關</option>
                    <option value="collaboration">合作機會</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] tracking-[0.15em] text-[#6b6b6b] uppercase mb-2">訊息</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-sm border border-[#e8e7e4] focus:border-[#c9a227] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="請描述您的需求..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#1a1a1a] text-white text-[11px] tracking-[0.2em] uppercase hover:bg-[#c9a227] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  whileHover={{}}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "傳送中..." : "傳送訊息"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}