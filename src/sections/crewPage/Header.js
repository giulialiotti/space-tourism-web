import React from "react";

// External components
import { Flex, Box, Button } from "theme-ui";

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

// Assets
import bgMobileImg from "assets/crew/background-crew-mobile.jpg";
import bgTabletImg from "assets/crew/background-crew-tablet.jpg";
import bgDesktopImg from "assets/crew/background-crew-desktop.jpg";

// Animations
import { transitionDefault } from "../animations";

export const Header = ({ data: { headline, team } }) => {
  const [cardIndex, setCardIndex] = React.useState(0);

  const stateControl = { cardIndex, setCardIndex };

  return (
    // Markup
    <HeaderWrapper>
      <Background />
      <NumberHeadline headline={headline} />
      <Cards data={team} stateControl={stateControl} />
    </HeaderWrapper>
  );
};

// Elements

const HeaderWrapper = ({ children }) => (
  <Box
    as="header"
    sx={{
      alignContent: ["start", "stretch", "stretch"],
      display: "grid",
      height: ["auto", "100vh", "100vh"],
      pt: ["23.47%", "17.71%", "14.723%"],
      pb: ["27.74%", 0, 0],
    }}
  >
    {children}
  </Box>
);

const Background = () => (
  <BackgroundImage
    bgMobileImg={bgMobileImg}
    bgTabletImg={bgTabletImg}
    bgDesktopImg={bgDesktopImg}
  />
);

const Cards = ({ data, stateControl }) => {
  return (
    <Flex
      className="crew__team-cards"
      sx={{
        flexDirection: ["column", "column-reverse", "row-reverse"],
        justifyContent: [null, null, "space-between"],
        ml: [0, 0, "11.46%"],
        mr: [0, 0, "9.52%"],
      }}
    >
      <CardsImages data={data} cardIndex={stateControl.cardIndex} />
      <CardsTextBlocks data={data} stateControl={stateControl} />
    </Flex>
  );
};

const CardsImages = ({ data, cardIndex }) => {
  const commonStyles = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    mx: "auto",
  };

  const styles = [
    {
      width: ["47.23%", "59.51%", "110.52%"],
    },
    {
      ...commonStyles,
      width: ["41.04%", "48.03%", "88.22%"],
    },
    {
      ...commonStyles,
      width: ["48.2%", "56.39%", "107.85%"],
    },
    {
      ...commonStyles,
      width: ["60.31%", "70.25%", "119.75%"],
    },
  ];

  return (
    <Box
      className="team-cards__images"
      sx={{
        alignContent: 'end',
        display: 'grid',
        position: "relative",
        mt: ["8.55%", "5.21%", "-5%"],
      }}
    >
      <Box
        className="team-cards__images-wrapper"
        sx={{ position: "relative", mb: [0, "-5.21%", "-3.53%"] }}
      >
        {data.map((member, index) => {
          return (
            <MotionBox
              key={`crew__cards-images-${index}`}
              sx={{ mx: "auto", ...styles[index] }}
              // Animation values
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === cardIndex ? 1 : 0,
              }}
              transition={transitionDefault}
            >
              <ImageContainer
                img={member.images.png}
                alt={member.images.alt}
                imgStyle={{ objectFit: "contain" }}
              />
            </MotionBox>
          );
        })}
      </Box>
      <Line />
    </Box>
  );
};

const Line = () => (
  <Box
    className="team-cards__line"
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

const CardsTextBlocks = ({ data, stateControl }) => (
  <Flex
    className="team-cards__text-blocks"
    sx={{
      flexDirection: ["column", "column-reverse", "column-reverse"],
      mt: ["8.55%", "7.82%", 0],
    }}
  >
    <Ovals stateControl={stateControl} />
    <Box>
      <CrewRoles data={data} cardIndex={stateControl.cardIndex} />
      <CrewNames data={data} cardIndex={stateControl.cardIndex} />
      <CrewBios data={data} cardIndex={stateControl.cardIndex} />
    </Box>
  </Flex>
);

const Ovals = ({ stateControl: { cardIndex, setCardIndex } }) => (
  <Flex
    className="text-blocks__ovals"
    sx={{
      justifyContent: ["center", "center", "flex-start"],
      mt: [0, "5.21%", "24.64%"],
      mb: [0, 0, "20.33%"],
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

const CrewRoles = ({ data, cardIndex }) => {
  const commonStyles = {
    position: "absolute",
    bottom: 0,
    left: ["50%", "50%", 0],
    transform: ["translateX(-50%)", "translateX(-50%)", "unset"],
  };

  const styles = [
    {},
    {
      ...commonStyles,
    },
    {
      ...commonStyles,
    },
    {
      ...commonStyles,
    },
  ];

  return (
    <Box
      className="text-blocks__crew-roles"
      sx={{ overflow: "hidden", position: "relative", mt: ["8.38%", 0, 0] }}
    >
      {data.map((member, index) => {
        return (
          <HeadingFour
            key={`crew-roles__item-${index}`}
            sx={{ ...styles[index] }}
            // Animation values
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === cardIndex ? 1 : 0,
            }}
            transition={transitionDefault}
          >
            {member.role}
          </HeadingFour>
        );
      })}
    </Box>
  );
};

const CrewNames = ({ data, cardIndex }) => {
  const commonStyles = {
    position: "absolute",
    bottom: 0,
    left: ["50%", "50%", 0],
    transform: ["translateX(-50%)", "translateX(-50%)", "unset"],
  };

  const styles = [
    {},
    {
      ...commonStyles,
    },
    {
      ...commonStyles,
    },
    {
      ...commonStyles,
    },
  ];

  return (
    <Box
      className="text-blocks__crew-names"
      sx={{
        overflow: "hidden",
        position: "relative",
        mt: ["2.1%", "1.05%", "3.08%"],
      }}
    >
      {data.map((member, index) => {
        return (
          <HeadingThree
            key={`crew-name__item-${index}`}
            sx={{ ...styles[index] }}
            // Animation values
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === cardIndex ? 1 : 0,
            }}
            transition={transitionDefault}
          >
            {member.name}
          </HeadingThree>
        );
      })}
    </Box>
  );
};

const CrewBios = ({ data, cardIndex }) => {
  const commonStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  };

  const styles = [
    {},
    {
      ...commonStyles,
    },
    {
      ...commonStyles,
    },
    {
      ...commonStyles,
    },
  ];

  return (
    <Box
      className="text-blocks__crew-bios"
      sx={{
        position: "relative",
        mt: ["4.19%", "2.09%", "5.55%"],
      }}
    >
      {data.map((member, index) => {
        return (
          <BodyText
            key={`crew-bios__item-${index}`}
            sx={{
              mx: ["auto", "auto", 0],
              maxWidth: [327, 458, 444],
              ...styles[index],
            }}
            // Animation values
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === cardIndex ? 1 : 0,
            }}
            transition={transitionDefault}
          >
            {member.bio}
          </BodyText>
        );
      })}
    </Box>
  );
};
