import React from "react";

import { Box } from "theme-ui";

export const BackgroundImage = ({ bgMobileImg, bgTabletImg, bgDesktopImg }) => (
  <Box
    sx={{
      backgroundImage: [
        `url(${bgMobileImg})`,
        `url(${bgTabletImg})`,
        `url(${bgDesktopImg})`,
      ],
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "fixed",
      inset: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
    }}
  />
);
