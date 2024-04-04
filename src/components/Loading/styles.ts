import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0%,40%,100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-50px);
  }
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
 
  img {
    margin: 0 1rem;
    max-width: 6rem;
    animation: ${loadingAnimation} 1s infinite;

    @media(max-width: 720px) {
      max-width: 5rem;
    }

    &:nth-child(1) {
      animation-delay: calc(.1s * 1);
    }
    &:nth-child(2) {
      animation-delay: calc(.1s * 2);
    }
    &:nth-child(3) {
      animation-delay: calc(.1s * 3);
    }
    &:nth-child(4) {
      animation-delay: calc(.1s * 4);
    }
    &:nth-child(5) {
      animation-delay: calc(.1s * 5);
    }
  }
`