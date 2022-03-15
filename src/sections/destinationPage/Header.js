import React from "react";

// External components
import { Flex } from "theme-ui";

// Components
import { BackgroundImage } from "components";

// Assets
import bgMobileImg from "assets/destination/background-destination-mobile.jpg";
import bgTabletImg from "assets/destination/background-destination-tablet.jpg";
import bgDesktopImg from "assets/destination/background-destination-desktop.jpg";

export const Header = ({ data: { headline, places, information, cards } }) => {
  const textBlockData = {
    places,
    information,
    cards,
  };

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
