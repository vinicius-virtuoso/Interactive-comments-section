import styled from "styled-components";
import { motion } from "framer-motion";

export const NewComment = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  border-radius: 0.25rem;
  padding: 1.2rem;
  display: grid;
  grid-template-areas: "textarea textarea" "avatar send";
  gap: 1rem;
  background: var(--White);
  align-items: center;
  justify-content: space-between;

  img {
    width: 2rem;
    grid-area: avatar;
  }

  textarea {
    resize: none;
    height: 6rem;
    padding: 0.5rem;
    grid-area: textarea;
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;

    &:focus,
    &:hover {
      border-color: var(--Moderate-blue);
    }
  }

  button {
    grid-area: send;
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
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    align-items: flex-start;

    button {
      max-width: 6rem;
    }
    textarea {
      width: 100%;
      height: 6.5rem;

      &::placeholder {
        opacity: 0.7;
      }
    }
  }
`;
