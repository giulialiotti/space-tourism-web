const buttonDefault = {
  cursor: "pointer",
  transform: "all 0.3s ease-out",
};

const tertiaryDefault = {
  ...buttonDefault,
  borderRadius: "circle",
  fontFamily: "heading",
  fontSize: [16, 24, 32],
  p: 0,
  height: [40, 60, 80],
  width: [40, 60, 80],
};

export const buttons = {
  primary: {
    ...buttonDefault,
    color: "black",
    bg: "white",
    borderRadius: "circle",
    fontSize: [20, 32, 32],
    letterSpacing: [1.25, 2, 2],
    height: [150, 242, 274],
    width: [150, 242, 274],
  },
  secondary: {
    bg: "transparent",
    borderRadius: "unset",
    cursor: "pointer",
    p: 0,
  },
  tertiary: {
    bg: "transparent",
    color: "white",
    border: "1px solid rgb(255, 255, 255, 0.25)",
    ...tertiaryDefault,
  },
  tertiaryActive: {
    bg: "white",
    color: "black",
    border: "none",
    ...tertiaryDefault,
  },
};
