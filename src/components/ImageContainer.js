import React from "react";

// External Components
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Local Components
import { MotionBox } from "./Motion";

export const ImageContainer = ({ img, alt, sx, imgStyle, ...props }) => {
  return (
    <MotionBox className="gatsby-image-container" sx={{ ...sx }} {...props}>
      <GatsbyImage image={getImage(img)} alt={alt} imgStyle={{ ...imgStyle }} />
    </MotionBox>
  );
};
