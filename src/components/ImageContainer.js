import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Box } from "theme-ui";

export const ImageContainer = ({ img, alt, sx, imgStyle }) => {
  return (
    <Box className="gatsby-image-container" sx={{ ...sx }}>
      <GatsbyImage image={getImage(img)} alt={alt} imgStyle={{ ...imgStyle }} />
    </Box>
  );
};
