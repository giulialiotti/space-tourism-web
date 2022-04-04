import { motion } from "framer-motion";
import { Box, Heading, Paragraph } from "theme-ui";

const MotionBox = motion(Box, { forwardMotionProps: true });
const MotionHeading = motion(Heading, { forwardMotionProps: true });
const MotionParagraph = motion(Paragraph, { forwardMotionProps: true });

export { MotionBox, MotionHeading, MotionParagraph };
