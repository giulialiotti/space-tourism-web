import { motion } from "framer-motion";
import { Box, Flex, Heading, Paragraph, Button, Link } from "theme-ui";

const MotionBox = motion(Box, { forwardMotionProps: true });
const MotionFlex = motion(Flex, { forwardMotionProps: true });
const MotionHeading = motion(Heading, { forwardMotionProps: true });
const MotionParagraph = motion(Paragraph, { forwardMotionProps: true });
const MotionButton = motion(Button, { forwardMotionProps: true });
const MotionLink = motion(Link, { forwardMotionProps: true });

export {
  MotionBox,
  MotionFlex,
  MotionHeading,
  MotionParagraph,
  MotionButton,
  MotionLink,
};
