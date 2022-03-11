import React from "react";

import { Link } from "theme-ui";

export const NavLink = ({ children, href, sx }) => (
  <Link
    href={href}
    sx={{
      color: "white",
      fontFamily: "body",
      fontSize: 1,
      letterSpacing: 1,
      textTransform: "uppercase",
      ...sx,
    }}
  >
    {children}
  </Link>
);
