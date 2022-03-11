import React from "react";

import { Heading, Paragraph } from "theme-ui";

export const HeadingOne = ({ children, sx }) => (
  <Heading as="h1" sx={{ fontSize: 7, color: "white", ...sx }}>
    {children}
  </Heading>
);

export const HeadingTwo = ({ children, sx }) => (
  <Heading as="h2" sx={{ fontSize: 6, color: "white", ...sx }}>
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
      fontSize: 3,
      color: "lila",
      letterSpacing: 2,
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
      fontSize: 3,
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
      color: "white",
      fontSize: 0,
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
      color: "white",
      fontSize: 2,
      ...sx,
    }}
  >
    {children}
  </Paragraph>
);
