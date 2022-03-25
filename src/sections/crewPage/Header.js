import React from "react";

// External components
import { Flex } from "theme-ui";

// Local Components
import { BackgroundImage } from "components";

// Assets
import bgMobileImg from "assets/crew/background-crew-mobile.jpg";
import bgTabletImg from "assets/crew/background-crew-tablet.jpg";
import bgDesktopImg from "assets/crew/background-crew-desktop.jpg";

export const Header = () => {
  return (
    // Markup
    <HeaderWrapper>
      <Background />
    </HeaderWrapper>
  );
};

// Elements

const HeaderWrapper = ({ children }) => (
  <Flex as="header" sx={{}}>
    {children}
  </Flex>
);

const Background = () => (
  <BackgroundImage
    bgMobileImg={bgMobileImg}
    bgTabletImg={bgTabletImg}
    bgDesktopImg={bgDesktopImg}
  />
);
