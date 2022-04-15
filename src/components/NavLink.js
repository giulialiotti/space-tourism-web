import React from "react";

// Local Components
import { MotionLink, MotionBox } from "./Motion";

// Animations
import { showLineOnHover } from "../sections/animations";

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
    <MotionBox
      as="span"
      variants={showLineOnHover}
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
