import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerComment = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Card = styled(motion.div)`
  width: 100%;

  border-radius: 0.5rem;
  padding: 1.2rem;
  display: grid;
  grid-template-areas: "headerUser headerUser headerUser" "comment comment comment" "score ... buttons";
  min-height: 10rem;

  gap: 0.8rem;
  background: var(--White);

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
    display: grid;
    grid-template-areas:
      "score headerUser buttons"
      "score comment comment";

    grid-template-columns: 48px 1fr;
  }
`;

export const HeaderComment = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-size: 1rem;
  grid-area: headerUser;

  img {
    height: 2rem;
    width: 2rem;
  }

  strong {
    color: var(--Dark-blue);

    span {
      color: var(--White);
      margin: 0.2rem 0.3rem;
      background: var(--Moderate-blue);
      font-weight: 500;
      padding: 0rem 0.4rem;
      border-radius: 0.15rem;
    }
  }

  span {
    color: var(--Grayish-Blue);
  }

  @media (min-width: 768px) {
    grid-area: headerUser;
  }
`;

export const EditArea = styled.textarea`
  width: 100%;
  resize: none;
  grid-area: comment;
  font-size: 1rem;
  font-weight: 400;
  color: var(--Grayish-Blue);
  grid-area: comment;
  min-height: 5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  outline: none;

  &:focus,
  &:hover {
    border-color: var(--Moderate-blue);
  }
`;

export const Text = styled(motion.p)`
  font-size: 1rem;
  font-weight: 400;
  color: var(--Grayish-Blue);
  grid-area: comment;

  strong {
    color: var(--Moderate-blue);
  }

  @media (min-width: 768px) {
    grid-area: comment;
  }
`;

export const ButtonUpdate = styled(motion.button)`
  max-width: 5rem;
  width: 100%;
  height: 2.5rem;
  justify-self: end;

  border: 0;
  background-color: var(--Moderate-blue);
  color: var(--White);
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover,
  &:active {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    grid-column: 2/4;
  }
`;

export const ButtonScore = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  height: 2.5rem;
  max-width: 6rem;
  width: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
  color: var(--Moderate-blue);
  font-weight: 500;
  background: var(--Very-light-gray);
  grid-area: score;
  grid-column: span 2;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 0;
    background: transparent;
    transition: all 0.2s ease-in;

    &:hover,
    &:active {
      filter: brightness(0.1);
    }

    @media (min-width: 768px) {
      width: 3rem;
    }
  }

  @media (min-width: 768px) {
    grid-area: score;
    flex-direction: column;

    height: 85%;
    max-width: 3rem;
    border-radius: 0.5rem;
  }
`;

export const ButtonDelete = styled(motion.button)`
  color: var(--Soft-red);
  &:hover,
  &:active {
    filter: brightness(2);
  }
  border: 0;
  background: transparent;
  font-weight: 700;
  font-size: 1rem;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  transition: all 0.2s ease-in;

  justify-self: end;
`;
export const ButtonEdit = styled(ButtonDelete)`
  color: var(--Moderate-blue);
  &:hover,
  &:active {
    filter: brightness(2.5);
  }
`;
export const ButtonReply = styled(ButtonDelete)`
  color: var(--Moderate-blue);
  &:hover,
  &:active {
    filter: brightness(2.5);
  }
  @media (min-width: 768px) {
    grid-area: buttons;
  }
`;

export const CurrentButton = styled(motion.div)`
  height: 100%;
  display: flex;
  grid-area: buttons;
  justify-self: end;
`;
