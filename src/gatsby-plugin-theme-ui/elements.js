const buttonDefault = {
  cursor: "pointer",
  transition: "all 0.3s ease-out",
};

const linkDefault = {
  cursor: "pointer",
  transition: "all 0.3s ease-out",
  textDecoration: "none",
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
  },
  secondary: {
    bg: "transparent",
    borderRadius: "unset",
    cursor: "pointer",
    p: 0,
  },
  tertiary: {
    ...tertiaryDefault,
    bg: "transparent",
    color: "white",
    border: "1px solid rgb(255, 255, 255, 0.25)",
    "&:hover": {
      border: "1px solid white",
    },
  },
  tertiaryActive: {
    ...tertiaryDefault,
    bg: "white",
    color: "black",
    border: "none",
  },
  dot: {
    ...buttonDefault,
    bg: "white",
    borderRadius: "circle",
    height: ["10px", "10px", "15px"],
    mx: ["8px", "8px", "12px"],
    p: 0,
    width: ["10px", "10px", "15px"],
    "&:hover": {
      opacity: 0.5,
    },
  },
};

export const links = {
  primary: {
    ...linkDefault,
    alignItems: "center",
    color: "black",
    bg: "white",
    borderRadius: "circle",
    display: "flex",
    fontSize: [20, 32, 32],
    justifyContent: "center",
    letterSpacing: [1.25, 2, 2],
    height: [150, 242, 274],
    width: [150, 242, 274],
  },
};
