import React from "react";

// External components
import { Flex } from "theme-ui";

// Components
import { HeadingFive } from "components";

export const NumberHeadline = ({ headline: { number, text }, sx }) => (
  <Flex
    className="number-headline"
    sx={{ m: ["0 auto", 0, 0], width: "max-content", ...sx }}
  >
    <HeadingFive
      sx={{
        color: "white",
        fontFamily: "barlow-bold",
        opacity: 0.25,
        mr: [18, 19, 28],
      }}
    >
      {number}
    </HeadingFive>
    <HeadingFive sx={{ color: "white" }}>{text}</HeadingFive>
  </Flex>
);
