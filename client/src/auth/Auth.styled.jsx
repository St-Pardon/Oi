import styled, { css } from 'styled-components';
import image from '../assets/product-img/hero_img3.jpg';
import image2 from '../assets/product-img/hero_img2.jpg';
import { devices } from '../utils/breakpoint.utils';

export const AuthContainer = styled.section`
  display: flex;
`;

export const AuthSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.signin &&
    css`
      background-image: url(${image});
      // background-size: cover;
    `}
  ${(props) =>
    props.signup &&
    css`
      background-image: url(${image2});
    `}
  
  background-size: cover;

  @media ${devices.tablet} {
    background-image: unset;

    ${(props) =>
      props.signin &&
      css`
        display: none;
      `}
    ${(props) =>
      props.signup &&
      css`
        display: none;
      `}
  }
`;

export const Form = styled.form`
  max-width: 500px;
  width: 100%;

  @media ${devices.tablet}{
    margin: 25px 20px;
  }
`;

export const Input = styled.input`
  width: 90%;
  border: none;
  outline: transparent;
  padding: 0.5em;
  font-size: 1.2rem;
`;

export const Legend = styled.legend`
  margin: 0 0.5em;
  padding: 0 0.2em;

  ${(props) =>
    props.req &&
    css`
      &::after {
        content: '*';
        color: red;
      }
    `}
`;

export const Error = styled.p`
  font-size: 1.3rem;
  color: red;
`;

export const Back = styled.div`
  display: none;

  @media ${devices.tablet}{
    display: block;
    position: fixed;
    top: 20px;
    right: 20px;
  }
`