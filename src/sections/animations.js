export const showLineOnHover = {
  initial: {
    width: 0,
  },
  hover: {
    width: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

export const transitionDefault = {
  type: "tween",
  ease: "easeInOut",
  duration: 1,
};

export const exitDefault = {
  opacity: 0,
  transition: {
    type: "tween",
    duration: 0.3,
    ease: "easeIn",
  },
};