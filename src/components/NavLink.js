import React from "react";

// Local Components
import { MotionLink, MotionBox } from "./Motion";

// Hooks
import { useMediaQuery } from "hooks/useMediaQuery";

// Animations
import { showLineOnHover } from "../sections/animations";

export const NavLink = ({ children, href, sx }) => {
  const isBiggerDevice = useMediaQuery("(min-width: 750px)");

  return (
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
      {isBiggerDevice && <Underline variants={showLineOnHover} />}
    </MotionLink>
  );
};

const Underline = ({ sx, ...props }) => (
  <MotionBox
    as="span"
    className="nav-link__underline"
    sx={{
      position: "absolute",
      bg: "white",
      bottom: 0,
      left: 0,
      height: "3px",
      sx,
    }}
    {...props}
  />
);
