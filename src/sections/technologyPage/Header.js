import React from "react";

// External components
import { Flex, Box, Button } from "theme-ui";
import { AnimatePresence } from "framer-motion";

// Local Components
import {
  BackgroundImage,
  NumberHeadline,
  ImageContainer,
  SubHeadingThree,
  HeadingThree,
  BodyText,
  MotionBox,
} from "components";

// Hooks
import { useMediaQuery } from "hooks/useMediaQuery";

// Assets
import bgMobileImg from "assets/technology/background-technology-mobile.jpg";
import bgTabletImg from "assets/technology/background-technology-tablet.jpg";
import bgDesktopImg from "assets/technology/background-technology-desktop.jpg";

// Animations
import { revealImage, revealHeadline, revealDescription } from "./animations";

export const Header = ({ data: { headline, caption, launch } }) => {
  const [stepIndex, setStepIndex] = React.useState(0);

  const stateControl = { stepIndex, setStepIndex };

  const isDesktop = useMediaQuery("(min-width: 1400px)");

  return (
    // Markup
    <HeaderWrapper>
      <Background />
      <NumberHeadline headline={headline} />
      <ContentWrapper>
        <ImagesWrapper
          data={launch}
          stepIndex={stepIndex}
          isDesktop={isDesktop}
        />
        <NumberButtonsWrapper data={launch} stateControl={stateControl} />
        <TextBlock
          caption={caption}
          data={launch}
          stepIndex={stepIndex}
          isDesktop={isDesktop}
        />
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
  <MotionBox
    className="technology-page__content-wrapper"
    sx={{
      display: ["block", "block", "grid"],
      gridTemplateColumns: [null, null, "auto 6.3% auto 10.21% auto"],
      pl: [0, 0, "11.53%"],
      mt: [0, 0, "1.81%"],
    }}
  >
    {children}
  </MotionBox>
);

const ImagesWrapper = ({ data, stepIndex, isDesktop }) => (
  <Box
    className="technology-page__images-wrapper"
    sx={{
      gridColumn: [null, null, 5],
      gridRow: [null, null, 1],
      position: "relative",
      mt: ["8.54%", "7.82%", 0],
      overflow: "hidden",
    }}
  >
    <AnimatePresence exitBeforeEnter>
      <ImageContainer
        img={
          isDesktop
            ? data[stepIndex].images.portrait
            : data[stepIndex].images.landscape
        }
        alt={data[stepIndex].images.alt}
        sx={{ "& > div": { width: "100%" } }}
        // Animation values
        initial="initial"
        animate="animate"
        exit="exit"
        variants={revealImage}
        key={`technology-page__images-wrapper__image-${stepIndex}`}
      />
    </AnimatePresence>
  </Box>
);

const NumberButtonsWrapper = ({
  data,
  stateControl: { stepIndex, setStepIndex },
}) => (
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
        variant={stepIndex !== index ? "tertiary" : "tertiaryActive"}
        sx={{ mx: ["2.14%", "1.05%", 0], my: [0, 0, "20%"] }}
        onClick={() => setStepIndex(index)}
      >
        {index + 1}
      </Button>
    ))}
  </Flex>
);

const TextBlock = ({ caption, data, stepIndex, isDesktop }) => (
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
    <TextBlockHeadline
      data={data}
      stepIndex={stepIndex}
      isDesktop={isDesktop}
    />
    <TextBlockDescription
      data={data}
      stepIndex={stepIndex}
      isDesktop={isDesktop}
    />
  </Box>
);

const TextBlockHeadline = ({ data, stepIndex, isDesktop }) => (
  <AnimatePresence exitBeforeEnter>
    <HeadingThree
      className="text-blocks__headline"
      key={`text-blocks__headline-${stepIndex}`}
      sx={{ mt: ["2.4%", "2.09%", "2.35%"] }}
      // Animation values
      initial="initial"
      animate="animate"
      exit="exit"
      variants={revealHeadline}
      style={{ originX: isDesktop ? 0 : 0.5 }}
    >
      {data[stepIndex].name}
    </HeadingThree>
  </AnimatePresence>
);

const TextBlockDescription = ({ data, stepIndex, isDesktop }) => (
  <AnimatePresence exitBeforeEnter>
    <BodyText
      className="text-blocks__descriptions"
      key={`text-blocks__descriptions-${stepIndex}`}
      sx={{
        mt: ["4.27%", "2.09%", "3.63%"],
        mx: ["auto", "auto", 0],
        maxWidth: [300, 442, 444],
      }}
      // Animation values
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ originX: isDesktop ? 0 : 0.5 }}
      variants={revealDescription}
    >
      {data[stepIndex].description}
    </BodyText>
  </AnimatePresence>
);

const Background = () => (
  <BackgroundImage
    bgMobileImg={bgMobileImg}
    bgTabletImg={bgTabletImg}
    bgDesktopImg={bgDesktopImg}
  />
);
