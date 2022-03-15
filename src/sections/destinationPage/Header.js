import React from "react";

// External components
import { Flex, Box } from "theme-ui";

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
      <Cards cards={cards} info={information} />
      <Background />
    </HeaderWrapper>
  );
};

// Elements

const HeaderWrapper = ({ children }) => (
  <Box as="header" sx={{ pt: ["23.47%"], pb: ["15.47%"] }}>
    {children}
  </Box>
);

const Headline = ({ headline }) => <NumberHeadline headline={headline} />;

const Background = () => (
  <BackgroundImage
    bgMobileImg={bgMobileImg}
    bgTabletImg={bgTabletImg}
    bgDesktopImg={bgDesktopImg}
  />
);

const Cards = ({ info, cards }) => {
  return (
    <Flex sx={{ flexDirection: ["column", "column", "row"] }}>
      <CardsImages cards={cards} />
      <CardsTextBlocks cards={cards} info={info} />
    </Flex>
  );
};

const CardsImages = ({ cards }) => (
  <Box
    className="destination__cards-images"
    sx={{ overflow: "hidden", mt: ["8.55%", 60] }}
  >
    <Flex sx={{ width: "400%" }}>
      {cards.map((card) => {
        return (
          <Box sx={{ width: "100%" }}>
            <ImageContainer
              img={card.images.png}
              alt={card.images.alt}
              sx={{ mx: "auto", width: ["45.34%", 300, 445] }}
            />
          </Box>
        );
      })}
    </Flex>
  </Box>
);

const CardTitles = ({ cards }) => (
  <Flex className="destination__cards-titles" sx={{ width: "400%" }}>
    {cards.map((card) => {
      return (
        <HeadingTwo sx={{ mt: ["1.334%", 32], width: "100%" }}>
          {card.name}
        </HeadingTwo>
      );
    })}
  </Flex>
);

const CardsDescriptions = ({ cards }) => (
  <Flex
    className="destination__cards-descriptions"
    sx={{ mt: ["0.27%", "8px"], width: "400%" }}
  >
    {cards.map((card) => {
      return (
        <BodyText sx={{ mx: "auto", px: "2%", width: "100%" }}>
          {card.description}
        </BodyText>
      );
    })}
  </Flex>
);

const CardsTextBlocks = ({ info, cards }) => (
  <Box
    className="destination__cards-text-blocks"
    sx={{ overflow: "hidden", mt: ["6.94%", 53] }}
  >
    <CardTitles cards={cards} />
    <CardsDescriptions cards={cards} />
    <Line />
    <InfoWrapper info={info} cards={cards} />
  </Box>
);

const Line = () => (
  <Box
    className="destination__card-line"
    sx={{
      bg: "#383B4B",
      m: "8.54% auto",
      height: 1,
      width: "87.2%",
    }}
  />
);

const InfoGroup = ({ title, children, sx, ...props }) => (
  <Box sx={{ textAlign: "center", ...sx }} {...props}>
    <SubHeadingTwo>{title}</SubHeadingTwo>
    {children}
  </Box>
);

const CardsInfo = ({ cards, distance = true }) => (
  <Flex sx={{ width: "400%" }}>
    {cards.map((card) => {
      return distance ? (
        <SubHeadingOne sx={{ mt: ["0.8%"], width: "100%" }}>
          {card.distance}
        </SubHeadingOne>
      ) : (
        <SubHeadingOne sx={{ mt: ["0.8%"], width: "100%" }}>
          {card.travel}
        </SubHeadingOne>
      );
    })}
  </Flex>
);

const InfoWrapper = ({ info: { distance, time }, cards }) => (
  <Box>
    <InfoGroup title={distance} className="destination__cards-distance">
      <CardsInfo cards={cards} />
    </InfoGroup>
    <InfoGroup title={time} sx={{ mt: ["8.54%", 0, 0] }}>
      <CardsInfo cards={cards} distance={false} />
    </InfoGroup>
  </Box>
);