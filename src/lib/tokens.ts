// KIAA Design Tokens - Mountain Narrative Design System
// 謙山敘事設計系統

export const tokens = {
  // Colors
  colors: {
    primary: "#292929",
    secondary: "#808080",
    lightGray: "#a3a3a3",
    bg: "#ffffff",
    bgAlt: "#f5f5f5",
    accent: "#c9a227",
    accentLight: "rgba(201, 162, 39, 0.1)",
  },

  // Typography
  fonts: {
    main: "var(--font-main)",
    serif: "var(--font-serif)",
  },

  // Spacing (8px base)
  spacing: {
    xs: "0.5rem",   // 8px
    sm: "0.75rem",  // 12px
    md: "1rem",     // 16px
    lg: "1.5rem",   // 24px
    xl: "2rem",     // 32px
    "2xl": "3rem",  // 48px
    "3xl": "4rem",  // 64px
    "4xl": "6rem",  // 96px
  },

  // Animation
  animation: {
    easeOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
    easeOutQuart: "cubic-bezier(0.25, 1, 0.5, 1)",
    spring: {
      gentle: { stiffness: 100, damping: 15 },
      bouncy: { stiffness: 300, damping: 22 },
      snappy: { stiffness: 400, damping: 20 },
    },
    durations: {
      fast: "150ms",
      normal: "300ms",
      slow: "600ms",
      slower: "800ms",
    },
  },

  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const blurSlideUp = {
  initial: { opacity: 0, filter: "blur(12px)", y: 28 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  exit: { opacity: 0, filter: "blur(4px)", y: -10 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9, filter: "blur(8px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
};

// Text reveal animation for headlines
export const wordReveal = (index: number) => ({
  initial: { filter: "blur(10px)", opacity: 0, y: 40 },
  animate: { 
    filter: "blur(0px)", 
    opacity: 1, 
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

// Stagger container settings
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

// Card hover animation
export const cardHover = {
  whileHover: { y: -7, scale: 1.018 },
  transition: { type: "spring", stiffness: 300, damping: 22 },
};

// Button hover animation
export const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 400, damping: 20 },
};