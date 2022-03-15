import React from "react";

// External components
import { Box, Button, Flex, Image, Link } from "theme-ui";

// Data
import { useNavigationData } from "./useNavigationData";

// Components
import { NavLink } from "components";

// Assets
import logo from "assets/shared/logo.svg";
import menu from "assets/shared/icon-hamburger.svg";

export const Navigation = () => {
  const {
    navigation: { links },
  } = useNavigationData();

  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    // Markup
    <NavWrapper>
      <Logo />
      <Line />
      <HamburguerIcon handleClick={toggleMenu} />
      <LinksWrapper links={links} isOpen={openMenu} />
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
  <Link
    href="/"
    sx={{ cursor: "pointer", width: ["12.24%", "6.96%", "3.61%"] }}
  >
    <Image src={logo} alt="Space tourism logo" sx={{ width: "100%" }} />
  </Link>
);

const HamburguerIcon = ({ handleClick }) => (
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
    <Image src={menu} alt="Hamburguer menu icon" sx={{ width: "100%" }} />
  </Button>
);

const LinksWrapper = ({ links, isOpen }) => (
  <Box
    className="navigation__links-wrapper"
    sx={{
      alignItems: [null, "center", "center"],
      display: isOpen ? ["block", "flex", "flex"] : ["none", "flex", "flex"],
      pt: ["31.47%", 0, 0],
      pl: ["8.55%", "6.25%", "8.55%"],
      position: ["fixed", "absolute", "absolute"],
      top: 0,
      right: 0,
      height: "100%",
      width: ["68%", "64.85%", "57.64%"],
      zIndex: 1,
    }}
  >
    <Links links={links} />
    <LinksBackground />
  </Box>
);

const Links = ({ links }) => (
  <Flex
    as="ul"
    sx={{
      flexDirection: ["column", "row", "row"],
      pl: 0,
      position: "relative",
      zIndex: 2,
      "& > li:nth-of-type(n+2)": {
        mt: ["14.37%", 0, 0],
      },
    }}
  >
    {links.map((link) => {
      return (
        <Box
          as="li"
          key={link.name}
          sx={{ listStyle: "none", mr: [0, 37, 50] }}
        >
          <NavLink href={link.to}>
            <Number number={link.number} />
            {link.name}
          </NavLink>
        </Box>
      );
    })}
  </Flex>
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
      zIndex: 3
    }}
  />
);
