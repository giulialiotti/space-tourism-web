import React from "react";

import { Heading, Paragraph } from "theme-ui";

export const HeadingOne = ({ children, sx }) => (
  <Heading
    as="h1"
    sx={{
      color: "white",
      fontSize: [80, 150, 150],
      lineHeight: [1.25, 1, 1],
      textAlign: ["center", "center", "left"],
      ...sx,
    }}
  >
    {children}
  </Heading>
);

export const HeadingTwo = ({ children, sx }) => (
  <Heading
    as="h2"
    sx={{
      fontSize: [56, 80, 100],
      color: "white",
      textAlign: ["center", "center", "left"],
      textTransform: 'uppercase',
      ...sx,
    }}
  >
    {children}
  </Heading>
);

export const HeadingThree = ({ children, sx }) => (
  <Heading as="h3" sx={{ fontSize: 5, color: "white", ...sx }}>
    {children}
  </Heading>
);

export const HeadingFour = ({ children, sx }) => (
  <Heading as="h4" sx={{ fontSize: 4, color: "white", ...sx }}>
    {children}
  </Heading>
);

export const HeadingFive = ({ children, sx }) => (
  <Heading
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
  >
    {children}
  </Heading>
);

export const SubHeadingOne = ({ children, sx }) => (
  <Paragraph
    sx={{
      color: "white",
      fontFamily: "heading",
      fontSize: 28,
      textTransform: "uppercase",
      ...sx,
    }}
  >
    {children}
  </Paragraph>
);

export const SubHeadingTwo = ({ children, sx }) => (
  <Paragraph
    sx={{
      color: "lila",
      fontSize: 14,
      letterSpacing: 0,
      textTransform: "uppercase",
      ...sx,
    }}
  >
    {children}
  </Paragraph>
);

export const BodyText = ({ children, sx }) => (
  <Paragraph
    sx={{
      fontFamily: "barlow, sans serif",
      color: "lila",
      fontSize: [15, 16, 18],
      lineHeight: [1.67, 1.75, 1.78],
      textAlign: ["center", "center", "left"],
      ...sx,
    }}
  >
    {children}
  </Paragraph>
);
