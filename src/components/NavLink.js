/** @jsx jsx */
import { jsx } from "theme-ui";

// Local Components
import { MotionLink, MotionBox } from "./Motion";

// Hooks
import { useMediaQuery } from "hooks/useMediaQuery";

export const NavLink = ({ children, href, pathname, sx, ...props }) => {
  const isBiggerDevice = useMediaQuery("(min-width: 750px)");

  return (
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
        "&:hover .nav-link__underline-hover": {
          transform: "scaleX(1)",
        },
      }}
      {...props}
    >
      {children}
      {isBiggerDevice && (
        <Underline
          className="nav-link__underline-hover"
          sx={{
            opacity: 0.5,
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "all .3s ease-in-out",
            width: "100%",
          }}
        />
      )}
      {pathname === href && (
        <Underline
          className="nav-link__underline"
          sx={{
            display: ["none", "inline-block", "inline-block"],
            width: "100%",
          }}
        />
      )}
    </MotionLink>
  );
};

const Underline = ({ sx, ...props }) => (
  <MotionBox
    as="span"
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
