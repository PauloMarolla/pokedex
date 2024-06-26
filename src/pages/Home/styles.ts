import styled from "styled-components";

export const PokemonLogo = styled.img`
  display: block;
  width: 100%;
  max-width: 42rem;
  margin: 6rem auto;
`

export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;

  .containerInputSearch {
    position: relative;
    flex: 1;
    width: 100%;
    max-width: 76rem;

    input {
      margin: 0 auto;
      display: block;
      width: 100%;
      height: 6rem;
      padding: 0 4rem;
      border: 0;
      background: var(--light-gray-500);
      border-radius: 1rem;
      font-size: 2rem;
      font-weight: 500;
      color: var(--dark-gray-500);
      outline: none;
      border: 2px solid transparent;
      transition: .2s ease-in-out;

      &:focus, &:hover {
        border: 2px solid var(--blue);
      }

      &::placeholder {
        font-size: 1.8rem;
        color: var(--light-gray-600);
      }
    }
    
    svg {
      font-size: 3.4rem;
      position: absolute;
      top: 1.2rem;
      right: 4rem;
      fill: var(--light-gray-600);
      transition: .2s ease-in-out;

      &:hover {
        fill: var(--blue);
      }
    }
  }
`

export const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6rem 2rem;
  padding-top: 6rem;

  @media(max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
