import React from "react";

// External components
import { Box, Button, Flex, Image } from "theme-ui";
import { AnimatePresence } from "framer-motion";

// Data
import { useNavigationData } from "./useNavigationData";

// Components
import { NavLink, MotionBox, MotionFlex, TransitionLink } from "components";

// Hooks
import { useMediaQuery } from "hooks/useMediaQuery";

// Assets
import logo from "assets/shared/logo.svg";
import menu from "assets/shared/icon-hamburger.svg";
import close from "assets/shared/icon-close.svg";

// Animations
import { transitionDefault } from "../animations";
import { staggerVariant, revealLinks } from "./animations";

export const Navigation = ({ pathname }) => {
  const {
    navigation: { links },
  } = useNavigationData();

  const isBiggerDevice = useMediaQuery("(min-width: 750px)");

  // Navigation overlay handlers
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Close navigation overlay if screen is bigger than tablet
  React.useEffect(() => {
    if (isBiggerDevice && openMenu) {
      setOpenMenu(false);
    }
  }, [isBiggerDevice, openMenu]);

  return (
    // Markup
    <NavWrapper>
      <Logo />
      <Line />
      <HamburguerIcon handleClick={toggleMenu} isOpen={openMenu} />
      {isBiggerDevice && (
        <LinksWrapper
          links={links}
          pathname={pathname}
          isBiggerDevice={isBiggerDevice}
        />
      )}
      <NavigationOverlay
        links={links}
        isOpen={openMenu}
        pathname={pathname}
        isBiggerDevice={isBiggerDevice}
      />
    </NavWrapper>
  );
};

// Elements

const NavWrapper = ({ children }) => (
  <Flex
    as="nav"
    sx={{
      alignItems: "center",
      justifyContent: "space-between",
      position: "absolute",
      py: ["6.4%", "3.13%", "1.67%"],
      px: ["6.4%", "5.08%", "3.82%"],
      top: [0, 0, "4.5%"],
      width: "100%",
      zIndex: 10,
    }}
  >
    {children}
  </Flex>
);

const Logo = () => (
  <TransitionLink
    to="/"
    sx={{ cursor: "pointer", width: ["12.24%", "6.96%", "3.61%"] }}
  >
    <Image src={logo} alt="Space tourism logo" sx={{ width: "100%" }} />
  </TransitionLink>
);

const HamburguerIcon = ({ handleClick, isOpen }) => (
  <Button
    variant="secondary"
    onClick={handleClick}
    sx={{
      display: ["block", "none", "none"],
      position: "relative",
      width: "7.34%",
      zIndex: 2,
    }}
  >
    <Image
      src={!isOpen ? menu : close}
      alt={!isOpen ? "Hamburguer menu icon" : "Close icon"}
      sx={{ width: "100%" }}
    />
  </Button>
);

const LinksWrapper = ({ links, pathname, isBiggerDevice, ...props }) => (
  <MotionBox
    className="navigation__links-wrapper"
    sx={{
      alignItems: [null, "center", "center"],
      display: ["block", "flex", "flex"],
      pt: ["31.47%", 0, 0],
      position: ["fixed", "absolute", "absolute"],
      top: 0,
      right: 0,
      height: "100%",
      width: ["68%", "64.85%", "57.64%"],
      zIndex: 1,
    }}
    {...props}
  >
    <Links links={links} pathname={pathname} isBiggerDevice={isBiggerDevice} />
  </MotionBox>
);

const NavigationOverlay = ({ links, isOpen, pathname, isBiggerDevice }) => (
  <AnimatePresence>
    {isOpen && (
      <LinksWrapper
        links={links}
        pathname={pathname}
        isBiggerDevice={isBiggerDevice}
        // Animation values
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={transitionDefault}
      />
    )}
  </AnimatePresence>
);

const Links = ({ links, pathname, isBiggerDevice }) => (
  <Box sx={{ width: "100%" }}>
    <MotionFlex
      as="ul"
      // Animation values
      initial="closed"
      animate="open"
      exit="closed"
      variants={staggerVariant}
      sx={{
        flexDirection: ["column", "row", "row"],
        pl: ["8.55%", "9.7%", "8.55%"],
        position: "relative",
        width: "100%",
        zIndex: 2,
        "& > li:nth-of-type(n+2)": {
          mt: ["14.37%", 0, 0],
        },
      }}
    >
      {links.map((link) => {
        return (
          <MotionBox
            as="li"
            key={link.name}
            // Animation values
            variants={!isBiggerDevice ? revealLinks : null}
            sx={{
              overflow: "hidden",
              position: "relative",
              listStyle: "none",
              mr: [0, 37, 50],
              py: [0, "8.7%", "5.14%"],
              zIndex: 2,
            }}
          >
            <NavLink href={link.to} pathname={pathname}>
              <Number number={link.number} />
              {link.name}
            </NavLink>
          </MotionBox>
        );
      })}
    </MotionFlex>

    <LinksBackground />
  </Box>
);

const Number = ({ number }) => (
  <Box
    as="span"
    sx={{
      display: ["block", "none", "block"],
      fontFamily: "barlow-bold",
      mr: ["4.94%", 0, 11],
    }}
  >
    {number}
  </Box>
);

const LinksBackground = () => (
  <Box
    className="links-wrapper__background"
    sx={{
      position: "absolute",
      inset: 0,
      height: "100%",
      width: "100%",
      zIndex: 1,
      "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)": {
        WebkitBackdropFilter: "blur(81.5485px)",
        backdropFilter: "blur(81.5485px)",
        bg: "rgba(255, 255, 255, 0.04)",
      },
      /* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
      "@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":
        {
          bg: [
            "rgb(11, 13, 25, 0.9)",
            "rgba(255, 255, 255, 0.04)",
            "rgba(255, 255, 255, 0.1)",
          ],
        },
    }}
  />
);

const Line = () => (
  <Box
    className="navigation__desktop-line"
    sx={{
      bg: "white",
      display: ["none", "none", "block"],
      opacity: 0.25,
      position: "absolute",
      left: "11.6%",
      height: 1,
      width: "32.85%",
      zIndex: 3,
    }}
  />
);
