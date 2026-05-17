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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Image
              src="/kiaa-website/logo-kiaa.png"
              alt="KIAA"
              width={28}
              height={28}
              className="h-7 w-auto"
            />
            <span className="text-sm font-medium text-primary tracking-wider">KIAA</span>
          </motion.div>

          {/* Desktop Nav - Consistent sizing */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest text-secondary hover:text-primary transition-colors relative py-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-6 md:hidden`}
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {navLinks.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="text-xl tracking-widest text-primary"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 40 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}