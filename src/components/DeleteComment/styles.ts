import styled from "styled-components";
import { motion } from "framer-motion";

export const OverlayModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled(motion.div)`
  width: 90%;
  max-width: 100%;
  background: var(--White);
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.5rem;

  h2 {
    color: var(--Dark-blue);
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--Grayish-Blue);
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: 370px;
  }
`;

export const ButtonGroup = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const ButtonDelete = styled(motion.button)`
  width: 100%;
  max-width: 150px;
  padding: 0.5rem;
  color: var(--White);
  border: 0;
  cursor: pointer;
  border-radius: 0.25rem;
  height: 3rem;
  font-size: 1.1rem;
  background-color: var(--Soft-red);
  transition: all 0.2s ease-in;

  &:hover,
  &:active {
    opacity: 0.7;
  }
`;

export const ButtonCancel = styled(ButtonDelete)`
  background-color: var(--Grayish-Blue);
`;
