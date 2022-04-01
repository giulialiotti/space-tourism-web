import React from "react";

// External components
import { Flex, Box, Button } from "theme-ui";

// Local Components
import {
  BackgroundImage,
  NumberHeadline,
  ImageContainer,
  SubHeadingThree,
  HeadingThree,
  BodyText,
} from "components";

// Hooks
import { useMediaQuery } from "hooks/useMediaQuery";

// Assets
import bgMobileImg from "assets/technology/background-technology-mobile.jpg";
import bgTabletImg from "assets/technology/background-technology-tablet.jpg";
import bgDesktopImg from "assets/technology/background-technology-desktop.jpg";

export const Header = ({ data: { headline, caption, launch } }) => {
  return (
    // Markup
    <HeaderWrapper>
      <Background />
      <NumberHeadline headline={headline} />
      <ContentWrapper>
        <ImagesWrapper data={launch} />
        <NumberButtonsWrapper data={launch} />
        <TextBlocks caption={caption} data={launch} />
      </ContentWrapper>
    </HeaderWrapper>
  );
};

// Elements

const HeaderWrapper = ({ children }) => (
  <Box
    as="header"
    sx={{
      pt: ["23.47%", "17.71%", "14.723%"],
      pb: ["14.94%", "12.64%", "7.02%"],
    }}
  >
    {children}
  </Box>
);

const ContentWrapper = ({ children }) => (
  <Box
    className="technology-page__content-wrapper"
    sx={{
      display: ["block", "block", "grid"],
      gridTemplateColumns: [null, null, "auto 6.3% auto 10.21% auto"],
      pl: [0, 0, "11.53%"],
      mt: [0, 0, "1.81%"],
    }}
  >
    {children}
  </Box>
);

const ImagesWrapper = ({ data }) => {
  const isDesktop = useMediaQuery("(min-width: 1400px)");

  const commonStyling = {
    position: "absolute",
    top: 0,
    opacity: 0,
  };

  const styles = [{}, { ...commonStyling }, { ...commonStyling }];

  return (
    <Box
      className="technology-page__images-wrapper"
      sx={{
        gridColumn: [null, null, 5],
        gridRow: [null, null, 1],
        position: "relative",
        mt: ["8.54%", "7.82%", 0],
      }}
    >
      {data.map((item, index) => (
        <ImageContainer
          key={`technology-page__images-wrapper__image-${index}`}
          img={isDesktop ? item.images.portrait : item.images.landscape}
          alt={item.images.alt}
          sx={{ "& > div": { width: "100%" }, ...styles[index] }}
        />
      ))}
    </Box>
  );
};

const NumberButtonsWrapper = ({ data }) => (
  <Flex
    className="technology-page__numbers-buttons-wrapper"
    sx={{
      gridColumn: [null, null, 1],
      gridRow: [null, null, 1],
      flexDirection: ["row", "row", "column"],
      justifyContent: "center",
      mt: ["9.07%", "7.3%", 0],
      width: ["100%", "100%", "max-content"],
    }}
  >
    {data.map((item, index) => (
      <Button
        key={`technology-page__numbers-buttons-wrapper-${index}`}
        variant="tertiary"
        sx={{ mx: ["2.14%", "1.05%", 0], my: [0, 0, "20%"] }}
      >
        {index + 1}
      </Button>
    ))}
  </Flex>
);

const TextBlocks = ({ caption, data }) => {
  const commonStyling = {
    position: "absolute",
    top: 0,
    opacity: 0,
  };

  const styles = [{}, { ...commonStyling }, { ...commonStyling }];

  return (
    <Box
      className="technology-page__text-blocks"
      sx={{
        alignSelf: [null, null, "center"],
        gridColumn: [null, null, 3],
        gridRow: [null, null, 1],
        textAlign: ["center", "center", "left"],
        mt: ["6.94%", "5.73%", 0],
        width: ["100%", "100%", "max-content"],
      }}
    >
      <SubHeadingThree>{caption}</SubHeadingThree>
      <TextBlocksHeadlines data={data} styles={styles} />
      <TextBlocksDescriptions data={data} styles={styles} />
    </Box>
  );
};

const TextBlocksHeadlines = ({ data, styles }) => (
  <Flex
    className="text-blocks__headlines"
    sx={{
      alignItems: ["center", "center", "flex-start"],
      flexDirection: "column",
      mt: ["2.4%", "2.09%", "2.35%"],
      position: "relative",
    }}
  >
    {data.map((item, index) => (
      <HeadingThree
        key={`text-blocks__headline-${index}`}
        sx={{ ...styles[index] }}
      >
        {item.name}
      </HeadingThree>
    ))}
  </Flex>
);

const TextBlocksDescriptions = ({ data, styles }) => (
  <Flex
    className="text-blocks__descriptions"
    sx={{
      alignItems: ["center", "center", "flex-start"],
      flexDirection: "column",
      mt: ["4.27%", "2.09%", "3.63%"],
      position: "relative",
    }}
  >
    {data.map((item, index) => (
      <BodyText
        key={`text-blocks__description-${index}`}
        sx={{ maxWidth: [300, 442, 444], ...styles[index] }}
      >
        {item.description}
      </BodyText>
    ))}
  </Flex>
);

const Background = () => (
  <BackgroundImage
    bgMobileImg={bgMobileImg}
    bgTabletImg={bgTabletImg}
    bgDesktopImg={bgDesktopImg}
  />
);
