/** @jsx jsx */
import { jsx } from "theme-ui";

import AniLink from "gatsby-plugin-transition-link/AniLink";

export const TransitionLink = ({ children, to, sx, ...props }) => {
  return (
    <AniLink to={to} bg="#0B0D17" cover direction="left" sx={sx} {...props}>
      {children}
    </AniLink>
  );
};
