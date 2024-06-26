import styled from "styled-components";
import { Link } from 'react-router-dom'


export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--dark-gray-500);
  font-size: 1.6rem;
  font-weight: 600;
  transition: .2s ease-in-out;

  svg {
    margin-right: 5px;
    font-size: 2.2rem;
    transition: .2s ease-in-out;
  }

  &:hover {
    color: var(--blue);
    svg {
      fill: var(--blue);
    }
  }
`

export const Content = styled.div` 
  min-height: calc(100vh - 82px);
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 6rem;
  align-content: center;
  grid-template-areas: "title title" "informations imageAndType";

  @media(max-width: 832px) {
    grid-template-columns: 1fr;
    grid-template-areas: "title" "imageAndType" "informations";
    padding-top: 4rem;
  }

  h1 {
    grid-area: title;
    font-size: 6.2rem;
    color: var(--dark-gray-500);
    font-weight: 500;
    padding-bottom: 6rem;
    text-transform: capitalize;
    
    @media(max-width: 832px) {
      text-align: center;
    }
  }
`

export const Informations = styled.section`
  grid-area: informations;

  @media(max-width: 832px) {
    margin: 0 auto;
  }

  .containerCardInformation {
    display: flex;
    gap: 3rem;

      @media(max-width: 832px) {
        justify-content: center;
      }
    }

    h4 {
      font-size: 3.2rem;
      font-weight: 500;
      color: var(--dark-gray-500);
      padding-bottom: 2rem;

      @media(max-width: 832px) {
        text-align: center;
      }

      &::before {
        content: '';
        display: block; 
        width: 100%;
        max-width: 45rem;
        height: 2px;
        background: var(--light-gray-600);
        margin: 5rem 0;
      }
    }

  .abilities {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    @media(max-width: 832px) {
      justify-content: center;
    }
  
    li {
      font-size: 2.4rem;
      color: var(--dark-gray-600);
      background: var(--yellow);
      font-weight: 500;
      padding: 2rem 3.5rem;
      border-radius: 1rem;
      text-transform: capitalize;
    }
  }
`

export const ImageAndType = styled.section`
   grid-area: imageAndType;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 4rem;

  img {
    width: 100%;
    max-width: 350px;
    @media(max-width: 832px) {
      grid-row: 1;
      max-width: 320px;
    }
    @media(max-width: 720px) {
      max-width: 260px;
    }
  }

  .types {
    max-width: 60rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    width: 100%;
    padding: 2rem 0;
    border-radius: 1rem;
    background: var(--light-gray-500);

    @media(max-width: 832px) {
      margin-bottom: 6rem;
    }

    li {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--dark-gray-500);
      text-transform: capitalize;

      img {
        display: block;
        margin-bottom: 5px;
        width: 100%;
        max-width: 5.5rem;
      }
    }

    li + li {
      &::after {
      content: '';
      background: var(--light-gray-600);
      height: 100%;
      width: 3px;
     
      position: absolute;
      top: 0;
      left: -3rem;
      }
    }
  }
`

