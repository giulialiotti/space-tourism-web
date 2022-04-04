import React from "react";

// External components
import { Flex, Box, Button } from "theme-ui";

// Local Components
import {
  BackgroundImage,
  NumberHeadline,
  ImageContainer,
  HeadingTwo,
  SubHeadingOne,
  SubHeadingTwo,
  BodyText,
  MotionBox,
} from "components";

// Assets
import bgMobileImg from "assets/destination/background-destination-mobile.jpg";
import bgTabletImg from "assets/destination/background-destination-tablet.jpg";
import bgDesktopImg from "assets/destination/background-destination-desktop.jpg";

export const Header = ({ data: { headline, places, information, cards } }) => {
  const [stepIndex, setStepIndex] = React.useState(0);

  const stateControl = { stepIndex, setStepIndex };

  return (
    // Markup
    <HeaderWrapper>
      <Headline headline={headline} />
      <Cards
        cards={cards}
        info={information}
        places={places}
        stateControl={stateControl}
      />
      <Background />
    </HeaderWrapper>
  );
};

// Elements

const HeaderWrapper = ({ children }) => (
  <Box
    as="header"
    sx={{
      pt: ["23.47%", "17.71%", "14.723%"],
      pb: ["15.47%", "8.08%", "7.78%"],
    }}
  >
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

const Cards = ({ info, cards, places, stateControl }) => {
  return (
    <Flex
      className="destination__cards"
      sx={{
        flexDirection: ["column", "column", "row"],
        justifyContent: [null, null, "space-between"],
        ml: [0, 0, "15.98%"],
        mr: [0, 0, "11.32%"],
      }}
    >
      <CardsImages cards={cards} />
      <CardsTextBlocks
        cards={cards}
        info={info}
        places={places}
        stateControl={stateControl}
      />
    </Flex>
  );
};

const CardsImages = ({ cards }) => (
  <Box
    className="destination__cards-images"
    sx={{
      overflow: "hidden",
      mt: ["8.55%", "7.82%", "9.27%"],
      width: [null, null, "42.51%"],
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

const CardsTextBlocks = ({ info, cards, places, stateControl }) => (
  <Box
    className="destination__cards-text-blocks"
    sx={{
      overflow: "hidden",
      mt: ["6.94%", "6.91%", "6.12%"],
      width: [null, null, "42.51%"],
    }}
  >
    <PlacesButtons places={places} stateControl={stateControl} />
    <CardTitles cards={cards} />
    <CardsDescriptions cards={cards} />
    <Line />
    <InfoWrapper info={info} cards={cards} />
  </Box>
);

const PlacesButtons = ({
  places,
  stateControl: { stepIndex, setStepIndex },
}) => (
  <Flex
    className="destinations_cards-buttons"
    sx={{
      justifyContent: ["center", "center", "flex-start"],
      "& > button:not(:last-of-type)": {
        mr: [0, 0, "8.1%"],
      },
    }}
  >
    {places.map((item, index) => {
      return (
        <Button
          key={item.name}
          variant="secondary"
          onClick={() => setStepIndex(index)}
          sx={{
            color: "lila",
            fontFamily: "body",
            fontSize: [14, 16, 16],
            letterSpacing: ["2.36px", "2.7px", "2.7px"],
            mx: ["13px", "17.5px", 0],
            position: "relative",
          }}
        >
          {item.name}
          {stepIndex === index && (
            <MotionBox
              layoutId="button-underline"
              sx={{
                bg: "white",
                height: "3px",
                position: "absolute",
                bottom: ["-8px", "-12px", "-12px"],
                width: "100%",
              }}
            />
          )}
        </Button>
      );
    })}
  </Flex>
);

const CardTitles = ({ cards }) => (
  <Flex
    className="destination__cards-titles"
    sx={{ mt: ["5.34%", "4.17%", "8.32%"], width: "400%" }}
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
    sx={{ mt: ["0.27%", "1.05%", "3.15%"], width: "400%" }}
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
      m: ["8.54% auto", "6.39% auto 3.65%", "12.14% 0 6.3%"],
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
  <Flex sx={{ mt: ["3.2%", "4.2%", "5.4%"], width: "400%" }}>
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
