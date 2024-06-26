import styled from "styled-components";

export const Container = styled.article`

  background: var(--light-gray-500);
  width: 100%;
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 3px 5px rgba(54, 65, 77, 0.25);

  @media(max-width: 832px) {
    max-width: 15rem;
  }

  strong {
    font-size: 5.2rem;
    font-weight: 600;
    color: var(--dark-gray-400);
    padding:  2.4rem 1rem;
  }

  span {
    width: 100%;
    display: block;
    font-size: 3.2rem;
    background: var(--blue);
    color: var(--light-gray-400);
    font-weight: 500;
    padding: 1.4rem 2.4rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }



`
