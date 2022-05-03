// External Components
import { motion } from "framer-motion";
import { Box, Flex, Heading, Paragraph, Button } from "theme-ui";

// Motion Components
const MotionBox = motion(Box, { forwardMotionProps: true });
const MotionFlex = motion(Flex, { forwardMotionProps: true });
const MotionHeading = motion(Heading, { forwardMotionProps: true });
const MotionParagraph = motion(Paragraph, { forwardMotionProps: true });
const MotionButton = motion(Button, { forwardMotionProps: true });

export { MotionBox, MotionFlex, MotionHeading, MotionParagraph, MotionButton };
