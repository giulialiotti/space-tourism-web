import "./fonts/fontImports";
import { buttons } from "./buttons";

const theme = {
  breakpoints: [
    // Small - is added by theme-ui automatically
    // '@media screen and (min-width: 20em)', // 320px

    // Medium
    "@media screen and (min-width: 750px)",

    // Xlarge
    "@media screen and (min-width: 1400px)",
  ],
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
  buttons
};

export default theme;
