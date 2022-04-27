export const staggerVariant = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export const revealLinks = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.8,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
