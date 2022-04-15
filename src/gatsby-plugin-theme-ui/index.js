import "./fonts/fontImports";
import { buttons, links } from "./elements";
import { colors } from "./colors";
import { breakpoints } from "./breakpoints";

const theme = {
  breakpoints,
  colors,
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
  // variants for buttons and links
  buttons,
  links
};

export default theme;
