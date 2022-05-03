import React from "react";

// External components
import { Flex, Box, Button } from "theme-ui";
import { AnimatePresence } from "framer-motion";

// Local Components
import {
  BackgroundImage,
  NumberHeadline,
  ImageContainer,
  HeadingFour,
  HeadingThree,
  BodyText,
  MotionBox,
} from "components";

// Hooks
import { useMediaQuery } from "hooks/useMediaQuery";

// Assets
import bgMobileImg from "assets/crew/background-crew-mobile.jpg";
import bgTabletImg from "assets/crew/background-crew-tablet.jpg";
import bgDesktopImg from "assets/crew/background-crew-desktop.jpg";

// Animations
import { transitionDefault } from "../animations";
import { revealRoleAndName, revealBio } from "./animations";

export const Header = ({ data: { headline, team } }) => {
  const [cardIndex, setCardIndex] = React.useState(0);

  const stateControl = { cardIndex, setCardIndex };

  return (
    // Markup
    <HeaderWrapper>
      <Background />
      <NumberHeadline headline={headline} />
      <Card data={team} stateControl={stateControl} />
    </HeaderWrapper>
  );
};

// Elements

const HeaderWrapper = ({ children }) => (
  <MotionBox
    as="header"
    sx={{
      alignContent: ["start", "stretch", "stretch"],
      display: "grid",
      height: ["auto", "100vh", "100vh"],
      pt: ["23.47%", "17.71%", "14.723%"],
      pb: ["27.74%", 0, 0],
    }}
    // Animation values
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </MotionBox>
);

const Background = () => (
  <BackgroundImage
    bgMobileImg={bgMobileImg}
    bgTabletImg={bgTabletImg}
    bgDesktopImg={bgDesktopImg}
  />
);

const Card = ({ data, stateControl }) => {
  return (
    <Flex
      className="crew__team-card"
      sx={{
        flexDirection: ["column", "column-reverse", "row-reverse"],
        justifyContent: [null, null, "space-between"],
        ml: [0, 0, "11.46%"],
        mr: [0, 0, "9.52%"],
      }}
    >
      <CardImage data={data} cardIndex={stateControl.cardIndex} />
      <CardTextBlock data={data} stateControl={stateControl} />
    </Flex>
  );
};

const CardImage = ({ data, cardIndex }) => {
  const commonStyles = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    mx: "auto",
    mb: [0, "-5.21%", "-3.53%"],
  };

  const styles = [
    {
      width: ["47.23%", "59.51%", "110.52%"],
      ...commonStyles,
    },
    {
      width: ["41.04%", "48.03%", "88.22%"],
      ...commonStyles,
    },
    {
      width: ["48.2%", "56.39%", "107.85%"],
      ...commonStyles,
    },
    {
      width: ["60.31%", "70.25%", "119.75%"],
      ...commonStyles,
    },
  ];

  return (
    <Box
      className="team-card__image"
      sx={{
        alignContent: "end",
        display: "grid",
        position: "relative",
        overflow: "hidden",
        mt: ["8.55%", "5.21%", "-5%"],
      }}
    >
      <AnimatePresence exitBeforeEnter>
        <ImageContainer
          img={data[cardIndex].images.png}
          alt={data[cardIndex].images.alt}
          imgStyle={{ objectFit: "contain" }}
          sx={{ ...styles[cardIndex] }}
          // Animation values
          key={`crew__cards-images-${cardIndex}`}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.9,
            transition: { duration: 0.6 },
          }}
          transition={transitionDefault}
        />
      </AnimatePresence>
      {/* This hidden image is used to hold on the height of the container */}
      <ImageContainer
        img={data[0].images.png}
        alt={data[0].images.alt}
        imgStyle={{ objectFit: "contain" }}
        sx={{
          mx: "auto",
          mb: [0, "-5.21%", "-3.53%"],
          visibility: "hidden",
          width: ["47.23%", "59.51%", "110.52%"],
        }}
      />
      <Line />
    </Box>
  );
};

const Line = () => (
  <Box
    className="team-card__line"
    sx={{
      bg: "#383B4B",
      display: ["block", "none", "none"],
      height: 1,
      mx: "auto",
      position: "relative",
      width: "87.2%",
      zIndex: 2,
    }}
  />
);

const CardTextBlock = ({ data, stateControl }) => {
  const isDesktop = useMediaQuery("(min-width: 1400px)");

  return (
    <Flex
      className="team-card__text-block"
      sx={{
        flexDirection: ["column", "column-reverse", "column-reverse"],
        mt: ["8.55%", "7.82%", 0],
      }}
    >
      <Ovals stateControl={stateControl} />
      <Box>
        <CrewRole
          data={data}
          cardIndex={stateControl.cardIndex}
          isDesktop={isDesktop}
        />
        <CrewName
          data={data}
          cardIndex={stateControl.cardIndex}
          isDesktop={isDesktop}
        />
        <CrewBio
          data={data}
          cardIndex={stateControl.cardIndex}
          isDesktop={isDesktop}
        />
      </Box>
    </Flex>
  );
};

const Ovals = ({ stateControl: { cardIndex, setCardIndex } }) => (
  <Flex
    className="text-block__ovals"
    sx={{
      justifyContent: ["center", "center", "flex-start"],
      mt: [0, "2.5rem", "7.5rem"],
      mb: [0, 0, "7.5rem"],
    }}
  >
    {Array.from({ length: 4 }).map((item, index) => (
      <Button
        key={`oval-${index}`}
        variant="dot"
        onClick={() => setCardIndex(index)}
        sx={{
          opacity: cardIndex === index ? 1 : 0.17,
        }}
      />
    ))}
  </Flex>
);

const CrewRole = ({ data, cardIndex, isDesktop }) => (
  <AnimatePresence exitBeforeEnter>
    <HeadingFour
      className="text-block__crew-role"
      sx={{ mt: ["8.38%", 0, 0] }}
      // Animation values
      initial="initial"
      animate="animate"
      exit="exit"
      key={`crew-roles__item-${cardIndex}`}
      style={{ originX: isDesktop ? 0 : 0.5 }}
      variants={revealRoleAndName}
    >
      {data[cardIndex].role}
    </HeadingFour>
  </AnimatePresence>
);

const CrewName = ({ data, cardIndex, isDesktop }) => (
  <AnimatePresence exitBeforeEnter>
    <HeadingThree
      key={`crew-name__item-${cardIndex}`}
      className="text-block__crew-name"
      sx={{ mt: ["2.1%", "1.05%", "3.08%"] }}
      // Animation values
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ originX: isDesktop ? 0 : 0.5 }}
      variants={revealRoleAndName}
    >
      {data[cardIndex].name}
    </HeadingThree>
  </AnimatePresence>
);

const CrewBio = ({ data, cardIndex, isDesktop }) => (
  <AnimatePresence exitBeforeEnter>
    <BodyText
      key={`crew-bio__item-${cardIndex}`}
      className="text-block__crew-bio"
      sx={{
        mt: ["4.19%", "2.09%", "5.55%"],
        mx: ["auto", "auto", 0],
        maxWidth: [327, 458, 444],
      }}
      // Animation values
      initial="initial"
      animate="animate"
      exit="exit"
      variants={revealBio}
      style={{ originX: isDesktop ? 0 : 0.5 }}
    >
      {data[cardIndex].bio}
    </BodyText>
  </AnimatePresence>
);
