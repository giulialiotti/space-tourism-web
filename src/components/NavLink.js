import React from "react";

import { Link } from "theme-ui";

export const NavLink = ({ children, href, sx }) => (
  <Link
    href={href}
    sx={{
      display: 'flex',
      color: "white",
      fontFamily: "body",
      fontSize: [16, 14, 16],
      letterSpacing: 1,
      textTransform: "uppercase",
      textDecoration: 'none',
      ...sx,
    }}
  >
    {children}
  </Link>
);
