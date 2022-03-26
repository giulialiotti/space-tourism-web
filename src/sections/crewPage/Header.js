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
} from "components";

// Assets
import bgMobileImg from "assets/crew/background-crew-mobile.jpg";
import bgTabletImg from "assets/crew/background-crew-tablet.jpg";
import bgDesktopImg from "assets/crew/background-crew-desktop.jpg";

export const Header = ({ data: { headline, team } }) => {
  return (
    // Markup
    <HeaderWrapper>
      <Background />
      <NumberHeadline headline={headline} />
      <Cards data={team} />
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

const Cards = ({ data }) => {
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
      <CardsImages data={data} />
      <CardsTextBlocks data={data} />
    </Flex>
  );
};

const CardsImages = ({ data }) => {
  const commonStyles = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%)",
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
        position: "relative",
        overflow: "hidden",
        mt: ["8.55%", "5.21%", "-5%"],
      }}
    >
      <Box sx={{ mb: [0, "-5.21%", "-3.53%"] }}>
        {data.map((member, index) => {
          return (
            <Box
              key={`crew__cards-images-${index}`}
              sx={{ mx: "auto", ...styles[index] }}
            >
              <ImageContainer
                img={member.images.png}
                alt={member.images.alt}
                imgStyle={{ objectFit: "contain" }}
              />
            </Box>
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
      width: "87.2%",
    }}
  />
);

const CardsTextBlocks = ({ data }) => (
  <Flex
    className="team-cards__text-blocks"
    sx={{
      flexDirection: ["column", "column-reverse", "column-reverse"],
      mt: ["8.55%", "7.82%", 0],
    }}
  >
    <Ovals />
    <Box>
      <CrewRoles data={data} />
      <CrewNames data={data} />
      <CrewBios data={data} />
    </Box>
  </Flex>
);

const Ovals = () => (
  <Flex
    className="text-blocks__ovals"
    sx={{
      justifyContent: ["center", "center", "flex-start"],
      mt: [0, "5.21%", '24.64%'],
      mb: [0, 0, '20.33%'],
    }}
  >
    {Array.from({ length: 4 }).map(() => (
      <Button
        variant="secondary"
        sx={{
          bg: "white",
          borderRadius: "circle",
          height: ["10px", "10px", "15px"],
          opacity: "0.17",
          mx: ["8px", "8px", "12px"],
          width: ["10px", "10px", "15px"],
        }}
      />
    ))}
  </Flex>
);

const CrewRoles = ({ data }) => {
  const commonStyles = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%)",
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
          >
            {member.role}
          </HeadingFour>
        );
      })}
    </Box>
  );
};

const CrewNames = ({ data }) => {
  const commonStyles = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%)",
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
        mt: ["2.1%", "1.05%", '3.08%'],
      }}
    >
      {data.map((member, index) => {
        return (
          <HeadingThree
            key={`crew-name__item-${index}`}
            sx={{ ...styles[index] }}
          >
            {member.name}
          </HeadingThree>
        );
      })}
    </Box>
  );
};

const CrewBios = ({ data }) => {
  const commonStyles = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%)",
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
        overflow: "hidden",
        position: "relative",
        mt: ["4.19%", "2.09%", '5.55%'],
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
          >
            {member.bio}
          </BodyText>
        );
      })}
    </Box>
  );
};
