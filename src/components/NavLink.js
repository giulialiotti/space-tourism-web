import React from "react";
import { motion } from "framer-motion";

import { Link, Box } from "theme-ui";

export const NavLink = ({ children, href, sx }) => (
  <MotionLink
    href={href}
    initial="default"
    whileHover="hover"
    animate="default"
    sx={{
      display: "flex",
      color: "white",
      fontFamily: "body",
      fontSize: [16, 14, 16],
      letterSpacing: 1,
      textTransform: "uppercase",
      textDecoration: "none",
      ...sx,
    }}
  >
    {children}
    <MotionSpan
      as="span"
      variants={underlineMotion}
      className="nav-link__underline"
      sx={{
        display: ["none", "inline-block", "inline-block"],
        position: "absolute",
        bg: "white",
        bottom: 0,
        left: 0,
        height: "3px",
      }}
    />
  </MotionLink>
);

// Animated Components

const MotionLink = motion(Link, { forwardMotionProps: true });
const MotionSpan = motion(Box, { forwardMotionProps: true });

// Animations

const underlineMotion = {
  default: {
    width: 0,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    width: "100%",
    transition: {
      duration: 0.3,
    },
  },
};
