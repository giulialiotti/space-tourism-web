import React from "react";

// External components
import { Box, Button, Flex, Image, Link } from "theme-ui";

// Data
import { useNavigationData } from "./useNavigationData";

// Components
import { NavLink } from "../../components";

// Assets
import logo from "../../assets/shared/logo.svg";
import menu from "../../assets/shared/icon-hamburger.svg";

export const Navigation = () => {
  const {
    navigation: { links },
  } = useNavigationData();

  return (
    <Flex
      as="nav"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        py: [24],
        px: [24],
        width: "100%",
      }}
    >
      <Logo />
      <HamburguerIcon />
      <LinksWrapper links={links} />
    </Flex>
  );
};

const Logo = () => (
  <Link href="/">
    <Image src={logo} alt="Space tourism logo" sx={{ width: [40] }} />
  </Link>
);

const HamburguerIcon = () => (
  <Button variant="secondary">
    <Image src={menu} alt="Hamburguer menu icon" sx={{ width: [24] }} />
  </Button>
);

const LinksWrapper = ({ links }) => (
  <Box
    as="ul"
    sx={{ display: "none", flexDirection: ["column", "row", "row"] }}
  >
    {links.map((link) => {
      return (
        <Box as="li" key={link.name} sx={{ listStyle: "none" }}>
          <NavLink href={link.to}>
            <Number number={link.number} />
            {link.name}
          </NavLink>
        </Box>
      );
    })}
  </Box>
);

const Number = ({ number }) => (
  <Box
    as="span"
    sx={{
      display: ["block", "none", "block"],
      fontFamily: "barlow-bold",
      mr: "11px",
    }}
  >
    {number}
  </Box>
);
