import React from "react";

// External components
import { Flex, Box, Button } from "theme-ui";

// Components
import {
  BackgroundImage,
  NumberHeadline,
  ImageContainer,
  HeadingTwo,
  SubHeadingOne,
  SubHeadingTwo,
  BodyText,
} from "components";

// Assets
import bgMobileImg from "assets/destination/background-destination-mobile.jpg";
import bgTabletImg from "assets/destination/background-destination-tablet.jpg";
import bgDesktopImg from "assets/destination/background-destination-desktop.jpg";

export const Header = ({ data: { headline, places, information, cards } }) => {
  return (
    // Markup
    <HeaderWrapper>
      <Headline headline={headline} />
      <Cards cards={cards} info={information} places={places} />
      <Background />
    </HeaderWrapper>
  );
};

// Elements

const HeaderWrapper = ({ children }) => (
  <Box
    as="header"
    sx={{ pt: ["23.47%", "17.71%", "212px"], pb: ["15.47%", "8.08%", "112px"] }}
  >
    {children}
  </Box>
);

const Headline = ({ headline }) => (
  <NumberHeadline headline={headline} sx={{ pl: [0, "5.02%"] }} />
);

const Background = () => (
  <BackgroundImage
    bgMobileImg={bgMobileImg}
    bgTabletImg={bgTabletImg}
    bgDesktopImg={bgDesktopImg}
  />
);

const Cards = ({ info, cards, places }) => {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "row"],
        justifyContent: [null, null, "space-between"],
        ml: [0, 0, 230],
        mr: [0, 0, 163],
      }}
    >
      <CardsImages cards={cards} />
      <CardsTextBlocks cards={cards} info={info} places={places} />
    </Flex>
  );
};

const CardsImages = ({ cards }) => (
  <Box
    className="destination__cards-images"
    sx={{
      overflow: "hidden",
      mt: ["8.55%", "7.82%", "97px"],
      width: [null, null, 445],
    }}
  >
    <Flex sx={{ width: "400%" }}>
      {cards.map((card) => {
        return (
          <Box key={card.images.alt} sx={{ width: "100%" }}>
            <ImageContainer
              img={card.images.png}
              alt={card.images.alt}
              sx={{ mx: "auto", width: ["45.34%", "39.07%", "100%"] }}
            />
          </Box>
        );
      })}
    </Flex>
  </Box>
);

const CardsTextBlocks = ({ info, cards, places }) => (
  <Box
    className="destination__cards-text-blocks"
    sx={{
      overflow: "hidden",
      mt: ["6.94%", "6.91%", 64],
      width: [null, null, 445],
    }}
  >
    <PlacesButtons places={places} />
    <CardTitles cards={cards} />
    <CardsDescriptions cards={cards} />
    <Line />
    <InfoWrapper info={info} cards={cards} />
  </Box>
);

const PlacesButtons = ({ places }) => (
  <Flex
    className="destinations_cards-buttons"
    sx={{
      justifyContent: ["center", "center", "flex-start"],
      "& > button:not(:last-of-type)": {
        mr: [0, 0, 35],
      },
    }}
  >
    {places.map((item) => {
      return (
        <Button
          key={item.name}
          variant="secondary"
          sx={{
            color: "lila",
            fontFamily: "body",
            fontSize: [14, 16, 16],
            letterSpacing: ["2.36px", "2.7px"],
            mx: ["13px", "17.5px", 0],
          }}
        >
          {item.name}
        </Button>
      );
    })}
  </Flex>
);

const CardTitles = ({ cards }) => (
  <Flex
    className="destination__cards-titles"
    sx={{ mt: ["5.34%", "4.17%", 37], width: "400%" }}
  >
    {cards.map((card) => {
      return (
        <HeadingTwo key={card.name} sx={{ width: "100%" }}>
          {card.name}
        </HeadingTwo>
      );
    })}
  </Flex>
);

const CardsDescriptions = ({ cards }) => (
  <Flex
    className="destination__cards-descriptions"
    sx={{ mt: ["0.27%", "1.05%", 14], width: "400%" }}
  >
    {cards.map((card) => {
      return (
        <BodyText
          key={card.description}
          sx={{ mx: "auto", px: ["2%", "3%", 0], width: "100%" }}
        >
          {card.description}
        </BodyText>
      );
    })}
  </Flex>
);

const Line = () => (
  <Box
    className="destination__card-line"
    sx={{
      bg: "#383B4B",
      m: ["8.54% auto", "6.39% auto 3.65%", "54px 0 28px"],
      height: 1,
      width: ["87.2%", "74.61%", "100%"],
    }}
  />
);

const InfoWrapper = ({ info: { distance, time }, cards }) => (
  <Flex
    sx={{
      flexDirection: ["column", "row", "row"],
      justifyContent: ["center", "center", "flex-start"],
    }}
  >
    <InfoGroup title={distance} className="destination__cards-distance">
      <CardsInfo cards={cards} />
    </InfoGroup>
    <InfoGroup title={time} sx={{ mt: ["8.54%", 0, 0] }}>
      <CardsInfo cards={cards} distance={false} />
    </InfoGroup>
  </Flex>
);

const InfoGroup = ({ title, children, sx, ...props }) => (
  <Box
    sx={{
      overflow: "hidden",
      textAlign: ["center", "center", "left"],
      width: ["100%", "37.305%", "50%"],
      ...sx,
    }}
    {...props}
  >
    <SubHeadingTwo>{title}</SubHeadingTwo>
    {children}
  </Box>
);

const CardsInfo = ({ cards, distance = true }) => (
  <Flex sx={{ mt: ["3.2%", "4.2%", 12], width: "400%" }}>
    {cards.map((card) => {
      return distance ? (
        <InfoText text={card.distance} />
      ) : (
        <InfoText text={card.travel} />
      );
    })}
  </Flex>
);

const InfoText = ({ text }) => (
  <SubHeadingOne key={text} sx={{ width: "100%" }}>
    {text}
  </SubHeadingOne>
);
