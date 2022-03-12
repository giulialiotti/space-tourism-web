import React from "react";

// External components
import { Box, Image } from "theme-ui";

export const Vector = ({ vectorRef, svg, alt, sx, ...props }) => {
  return (
    <Box ref={vectorRef} sx={{ display: "flex", ...sx }} {...props}>
      <Image src={svg} alt={alt} sx={{ maxHeight: "100%", maxWidth: "100%" }} />
    </Box>
  );
};
