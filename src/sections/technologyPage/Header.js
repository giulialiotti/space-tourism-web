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
  MotionBox,
} from "components";

// Hooks
import { useMediaQuery } from "hooks/useMediaQuery";

// Assets
import bgMobileImg from "assets/technology/background-technology-mobile.jpg";
import bgTabletImg from "assets/technology/background-technology-tablet.jpg";
import bgDesktopImg from "assets/technology/background-technology-desktop.jpg";

// Framer motion
import { AnimatePresence } from "framer-motion";

export const Header = ({ data: { headline, caption, launch } }) => {
  const [stepIndex, setStepIndex] = React.useState(0);

  const stateControl = { stepIndex, setStepIndex };

  return (
    // Markup
    <HeaderWrapper>
      <Background />
      <NumberHeadline headline={headline} />
      <ContentWrapper>
        <ImagesWrapper data={launch} stepIndex={stepIndex} />
        <NumberButtonsWrapper data={launch} stateControl={stateControl} />
        <TextBlock caption={caption} data={launch} stepIndex={stepIndex} />
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

const ImagesWrapper = ({ data, stepIndex }) => {
  const isDesktop = useMediaQuery("(min-width: 1400px)");

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
      <AnimatePresence exitBeforeEnter>
        <MotionBox
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          key={`technology-page__images-wrapper__image-${stepIndex}`}
        >
          <ImageContainer
            img={
              isDesktop
                ? data[stepIndex].images.portrait
                : data[stepIndex].images.landscape
            }
            alt={data[stepIndex].images.alt}
            sx={{ "& > div": { width: "100%" } }}
          />
        </MotionBox>
      </AnimatePresence>
    </Box>
  );
};

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

const TextBlock = ({ caption, data, stepIndex }) => (
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
    <AnimatePresence exitBeforeEnter>
      <SubHeadingThree>{caption}</SubHeadingThree>
      <TextBlockHeadline data={data} stepIndex={stepIndex} />
      <TextBlockDescription data={data} stepIndex={stepIndex} />
    </AnimatePresence>
  </Box>
);

const TextBlockHeadline = ({ data, stepIndex }) => (
  <HeadingThree
    className="text-blocks__headline"
    // animate={{ opacity: 1 }}
    // initial={{ opacity: 0 }}
    // exit={{ opacity: 0 }}
    // transition={{ duration: 0.2 }}
    sx={{ mt: ["2.4%", "2.09%", "2.35%"] }}
  >
    {data[stepIndex].name}
  </HeadingThree>
);

const TextBlockDescription = ({ data, stepIndex }) => (
  <BodyText
    className="text-blocks__descriptions"
    sx={{
      mt: ["4.27%", "2.09%", "3.63%"],
      mx: ["auto", "auto", 0],
      maxWidth: [300, 442, 444],
    }}
  >
    {data[stepIndex].description}
  </BodyText>
);

const Background = () => (
  <BackgroundImage
    bgMobileImg={bgMobileImg}
    bgTabletImg={bgTabletImg}
    bgDesktopImg={bgDesktopImg}
  />
);
