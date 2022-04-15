const buttonDefault = {
  cursor: "pointer",
  transform: "all 0.3s ease-out",
};

const linkDefault = {
  cursor: "pointer",
  transform: "all 0.3s ease-out",
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
