import React from "react";

// External components
import { Flex } from "theme-ui";

// Components
import { BackgroundImage } from "components";

// Assets
import bgMobileImg from "assets/crew/background-crew-mobile.jpg";
import bgTabletImg from "assets/crew/background-crew-tablet.jpg";
import bgDesktopImg from "assets/crew/background-crew-desktop.jpg";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Background />
    </HeaderWrapper>
  );
};

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
