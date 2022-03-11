import "./fonts/fontImports";

const theme = {
  colors: {
    black: "#0B0D17",
    lila: "#D0D6F9",
    white: "#ffffff",
  },
  // variants for typography settings
  fonts: {
    body: "barlow-condensed, sans-serif",
    heading: "bellefair, serif",
  },
  fontSizes: [14, 16, 18, 28, 32, 56, 100, 150],
  fontWeights: {
    body: 400,
    heading: 400,
  },
  letterSpacings: [2.35, 2.7, 4.75],
  lineHeights: {
    body: 1,
    heading: 1,
  },
  // variants for styles
  styles: {
    root: {
      boxSizing: "border-box",
      padding: 0,
      margin: 0,
    },
  },
  radii: {
    circle: "50%",
  },
  // variants for buttons
  buttons: {
    primary: {
      color: "black",
      cursor: "pointer",
      bg: "white",
      borderRadius: "circle",
      fontSize: [20, 32, 32],
      letterSpacing: [1.25, 2, 2],
      height: [150, 242, 274],
      width: [150, 242, 274],
    },
  },
};

export default theme;
