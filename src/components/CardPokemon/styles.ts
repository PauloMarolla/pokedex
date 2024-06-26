import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--light-gray-300);
  box-shadow: 0 3px 12px rgba(67, 80, 95, 0.25);
  border-radius: 1.6rem;
  padding: 6rem 0;
  transition: .2s ease-in-out;
  
  &::before {
    position: absolute;
    top: 5rem;
    content: '';
    display: block;
    width: 18rem;
    height: 18rem;
    background: var(--light-gray-300);
    border-radius: 50%;
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.1) ;
  }

  &:hover {
    transform: translateY(-2rem);
  }

  .pokeball {
    width: 5.2rem;
    position: absolute;
    top: -2.6rem;
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  .pokemon {
    z-index: 1;
    width: 100%;
    max-width: 15.6rem;
  }

  span {
    color: var(--dark-gray-500);
    font-size: 2.4rem;
    font-weight: 500;
    padding-top: 4rem;
    text-transform: capitalize;
  }

`