import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerCard = styled(motion.li)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ReplyContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(1rem, 1rem) 1fr;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: minmax(1rem, 6.5rem) 1fr;
  }
`;

export const Line = styled(motion.span)`
  display: block;
  width: 0.2rem;
  height: 100%;
  background: var(--Grayish-Blue);
  border-radius: 0.5rem;
  opacity: 0.1;

  @media (min-width: 768px) {
    justify-self: center;
  }
`;
