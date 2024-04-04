import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--dark-gray-500);
  }

  *, input, textarea, button {
    font-family: 'inter', sans-serif;
  }

  html {
    font-size: 62.5%;

    @media(max-width: 1080px) {
      font-size: 56.25%;
    }

    @media(max-width: 720px) {
      font-size: 50%;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }


  .Toastify__toast-body {
    font-size: 1.8rem;
    line-height: 150%;
    color: var(--light-gray-300);
  }

  .Toastify__close-button {
    svg {
      fill: var(--light-gray-300);
    }
  }

`

export const FullHeight = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: var(--light-gray-400); 
`


export const GlobalContainer = styled.main`
  width: 100%;
  max-width: 116rem;
  margin: 0 auto;
  padding: 3rem 2rem;
`