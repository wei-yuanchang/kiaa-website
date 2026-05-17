"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#stories", label: "敘事" },
  { href: "#architecture", label: "建築" },
  { href: "#education", label: "教育" },
  { href: "#about", label: "關於" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          {/* Logo - Premium styling */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Image
              src="/kiaa-website/logo-kiaa.png"
              alt="KIAA"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-sm font-medium text-[#1a1a1a] tracking-[0.2em]">KIAA</span>
          </motion.div>

          {/* Desktop Nav - Elegant spacing */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-[0.15em] text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors relative py-2 uppercase"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-[1px] bg-[#c9a227] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Contact CTA - Desktop only */}
          <motion.a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-[#1a1a1a] text-[#1a1a1a] text-[11px] tracking-[0.15em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{}}
          >
            聯繫
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-[#1a1a1a]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Premium full screen */}
      <motion.div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 md:hidden`}
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
      >
        {navLinks.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="text-2xl tracking-[0.2em] text-[#1a1a1a] uppercase"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 40 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </motion.a>
        ))}
        
        {/* Mobile contact button */}
        <motion.a
          href="#contact"
          className="mt-4 px-8 py-3 bg-[#1a1a1a] text-white text-[12px] tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          取得聯繫
        </motion.a>
      </motion.div>
    </>
  );
}