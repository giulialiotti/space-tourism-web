import React from "react";
import { Box } from "theme-ui";

import { Navigation } from "sections/navigation/Navigation";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Box as="main" sx={{ position: "relative" }}>
        <title>Space Tourism Web</title>
        {children}
      </Box>
    </>
  );
};
