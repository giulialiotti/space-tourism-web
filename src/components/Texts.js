import React from "react";

// import { Heading, Paragraph } from "theme-ui";
import { MotionHeading, MotionParagraph } from "./Motion";

export const HeadingOne = ({ children, sx, ...props }) => (
  <MotionHeading
    as="h1"
    sx={{
      color: "white",
      fontSize: [80, 150, 150],
      lineHeight: [1.25, 1, 1],
      textAlign: ["center", "center", "left"],
      ...sx,
    }}
    {...props}
  >
    {children}
  </MotionHeading>
);

export const HeadingTwo = ({ children, sx , ...props }) => (
  <MotionHeading
    as="h2"
    sx={{
      fontSize: [56, 80, 100],
      color: "white",
      textAlign: ["center", "center", "left"],
      textTransform: "uppercase",
      ...sx,
    }}
    {...props}
  >
    {children}
  </MotionHeading>
);

export const HeadingThree = ({ children, sx, ...props }) => (
  <MotionHeading
    as="h3"
    sx={{
      fontSize: [24, 40, 56],
      color: "white",
      textAlign: ["center", "center", "left"],
      textTransform: "uppercase",
      ...sx,
    }}
    {...props}
  >
    {children}
  </MotionHeading>
);

export const HeadingFour = ({ children, sx, ...props }) => (
  <MotionHeading
    as="h4"
    sx={{
      fontSize: [16, 24, 32],
      color: "white",
      opacity: "0.5",
      textAlign: ["center", "center", "left"],
      textTransform: "uppercase",
      ...sx,
    }}
    {...props}
  >
    {children}
  </MotionHeading>
);

export const HeadingFive = ({ children, sx, ...props }) => (
  <MotionHeading
    as="h5"
    sx={{
      fontFamily: "body",
      fontSize: [16, 20, 28],
      color: "lila",
      letterSpacing: [2.7, 3.37, 4.72],
      textAlign: ["center", "center", "left"],
      textTransform: "uppercase",
      ...sx,
    }}
    {...props}
  >
    {children}
  </MotionHeading>
);

export const SubHeadingOne = ({ children, sx, ...props  }) => (
  <MotionParagraph
    sx={{
      color: "white",
      fontFamily: "heading",
      fontSize: 28,
      textTransform: "uppercase",
      ...sx,
    }}
    {...props}
  >
    {children}
  </MotionParagraph>
);

export const SubHeadingTwo = ({ children, sx, ...props }) => (
  <MotionParagraph
    sx={{
      color: "lila",
      fontSize: 14,
      letterSpacing: 0,
      textTransform: "uppercase",
      ...sx,
    }}
    {...props}
  >
    {children}
  </MotionParagraph>
);

export const SubHeadingThree = ({ children, sx, ...props }) => (
  <MotionParagraph
    sx={{
      color: "lila",
      fontFamily: "body",
      fontSize: [14, 16, 16],
      letterSpacing: ["2.36px", "2.7px", "2.7px"],
      textTransform: "uppercase",
      ...sx,
    }}
    {...props}
  >
    {children}
  </MotionParagraph>
);

export const BodyText = ({ children, sx, ...props }) => (
  <MotionParagraph
    sx={{
      fontFamily: "barlow, sans serif",
      color: "lila",
      fontSize: [15, 16, 18],
      lineHeight: [1.67, 1.75, 1.78],
      textAlign: ["center", "center", "left"],
      ...sx,
    }}
    {...props}
  >
    {children}
  </MotionParagraph>
);
