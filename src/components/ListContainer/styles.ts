import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;

  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;

  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    align-items: flex-start;
    padding: 1rem 0.2rem;
  }
`;

export const List = styled(motion.ul)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;

  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
  }
`;
