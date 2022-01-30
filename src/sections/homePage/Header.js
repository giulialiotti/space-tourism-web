import React from "react";
import { Box, Heading, Paragraph } from "theme-ui";

import bgMobileImg from "../../assets/home/background-home-mobile.jpg";
import bgTabletImg from "../../assets/home/background-home-tablet.jpg";
import bgDesktopImg from "../../assets/home/background-home-desktop.jpg";

export const Header = ({
  data: { subHeadline, headline, paragraph, button },
}) => {
  return (
    <Box
      as="header"
      sx={{
        backgroundImage: [
          `url(${bgMobileImg})`,
          `url(${bgTabletImg})`,
          `url(${bgDesktopImg})`,
        ],
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: "100vh",
        width: "100%",
      }}
    >
      <Heading sx={{ color: 'lila' }}>{subHeadline}</Heading>
      <Heading sx={{ color: 'white' }}>{headline}</Heading>
      <Paragraph sx={{ color: 'lila' }}>{paragraph}</Paragraph>
    </Box>
  );
};
