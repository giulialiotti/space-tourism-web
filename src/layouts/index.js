import React from "react";
import { Box } from "theme-ui";

import { Navigation } from "sections/navigation/Navigation";

const Layout = ({ children, location }) => {
  return (
    <>
      <Navigation pathname={location.pathname} />
      <Box as="main" sx={{ position: "relative", overflowX: "hidden" }}>
        <title>Space Tourism Web</title>
        {children}
      </Box>
    </>
  );
};

export default Layout;
