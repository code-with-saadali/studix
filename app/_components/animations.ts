// animations.ts
import { Variants } from "framer-motion";

const CONFIG = {
  image: { duration: 0.9, delay: 0.1, scaleDuration: 1.1 },
  title: { duration: 0.8, delay: 0.35 },
  list: { delayChildren: 0.7, staggerChildren: 0.07, itemDuration: 0.6 },
  circle: { duration: 0.8, delay: 1.2 },
  card: { duration: 0.6, delay: 1.5 },
  strip: { duration: 0.6, delay: 0.05 },
  fadeUp: { duration: 0.6, delay: 0.1 },
};

// ─── VARIANTS ──────────────────────────────────────

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: CONFIG.image.duration,
      delay: CONFIG.image.delay,
      ease: [0.25, 0.46, 0.45, 0.94],
      scale: {
        duration: CONFIG.image.scaleDuration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
};

export const slideUpTitle: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: CONFIG.title.duration,
      delay: CONFIG.title.delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: CONFIG.fadeUp.duration,
      delay: CONFIG.fadeUp.delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerList: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: CONFIG.list.delayChildren,
      staggerChildren: CONFIG.list.staggerChildren,
    },
  },
};

export const slideUpItem: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: CONFIG.list.itemDuration,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: CONFIG.circle.duration,
      delay: CONFIG.circle.delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: CONFIG.card.duration,
      delay: CONFIG.card.delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideUpStrip: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: CONFIG.strip.duration,
      delay: CONFIG.strip.delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


// Center Reveal Animation
export const imageReveal: Variants = {
  hidden: {
    clipPath: "inset(0% 0 100% 0)",
    scale: 1.15,
    opacity: 0.6,
  },
  visible: {
    clipPath: "inset(0% 0 0% 0)",
    scale: 1,
    opacity: 1,
    transition: {
      clipPath: {
        duration: 1.1,
        ease: [0.83, 0, 0.17, 1],
      },
      scale: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
      opacity: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
};