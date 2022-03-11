import React from "react";

// External components
import { Box, Button, Flex } from "theme-ui";

// Components
import { HeadingOne, HeadingFive, BodyText } from "../../components";

// Assets
import bgMobileImg from "../../assets/home/background-home-mobile.jpg";
import bgTabletImg from "../../assets/home/background-home-tablet.jpg";
import bgDesktopImg from "../../assets/home/background-home-desktop.jpg";

export const Header = ({
  data: { subHeadline, headline, paragraph, button },
}) => {
  const textData = {
    subHeadline,
    headline,
    paragraph,
  };

  return (
    <HeaderWrapper>
      <TextBlock data={textData} />
      <ExploreButton button={button} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = ({ children }) => (
  <Flex
    as="header"
    sx={{
      backgroundImage: [
        `url(${bgMobileImg})`,
        `url(${bgTabletImg})`,
        `url(${bgDesktopImg})`,
      ],
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      flexDirection: ["column", "column", "row"],
      justifyContent: "space-between",
      pt: ["30.94%", "26.31%", "10%"],
      px: ["6.63%", "20.71%", "11.46%"],
      pb: ["13.26%", "11.72%", "9.1%"],
      height: "100vh",
      width: "100%",
    }}
  >
    {children}
  </Flex>
);

const TextBlock = ({ data: { subHeadline, headline, paragraph } }) => (
  <Box sx={{ alignSelf: ["center", "center", "flex-end"] }}>
    <HeadingFive>{subHeadline}</HeadingFive>
    <HeadingOne sx={{ py: ["5.1%", "3.558%", "5.33%"] }}>{headline}</HeadingOne>
    <BodyText sx={{ maxWidth: [326, 451, 444], m: "0 auto" }}>
      {paragraph}
    </BodyText>
  </Box>
);

const ExploreButton = ({ button }) => (
  <Button sx={{ alignSelf: ["center", "center", "flex-end"] }}>{button}</Button>
);
