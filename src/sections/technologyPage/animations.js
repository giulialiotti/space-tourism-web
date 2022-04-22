import { transitionDefault } from "../animations";

// Framer Motion animation variants

export const revealImage = {
  initial: { scale: 1.1, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      ...transitionDefault,
    },
  },
};

export const revealHeadline = {
  initial: { opacity: 0, y: "50%", scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...transitionDefault,
    },
  },
};

export const revealDescription = {
  initial: { opacity: 0, scale: 0.8, y: "30%" },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ...transitionDefault,
    },
  },
};
