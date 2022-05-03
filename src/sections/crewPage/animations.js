import { transitionDefault, exitDefault } from "../animations";

// Framer Motion animation variants

export const revealRoleAndName = {
  initial: { opacity: 0, y: "50%", scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...transitionDefault,
    },
  },
  exit: exitDefault,
};

export const revealBio = {
  initial: { opacity: 0, scale: 0.8, y: "30%" },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ...transitionDefault,
    },
  },
  exit: exitDefault,
};
