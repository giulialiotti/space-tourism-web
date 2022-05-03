/** @jsx jsx */
import { jsx } from "theme-ui";

// Local Components
import { MotionLink, MotionBox } from "./Motion";

export const NavLink = ({ children, href, pathname, sx }) => (
  <MotionLink
    bg="#0B0D17"
    cover
    direction="left"
    to={href}
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
    {pathname === href && (
      <Underline
        sx={{
          display: ["none", "inline-block", "inline-block"],
          width: "100%",
        }}
      />
    )}
  </MotionLink>
);

export const Underline = ({ sx, ...props }) => (
  <MotionBox
    as="span"
    className="nav-link__underline"
    sx={{
      position: "absolute",
      bg: "white",
      bottom: 0,
      left: 0,
      height: "3px",
      ...sx,
    }}
    {...props}
  />
);
