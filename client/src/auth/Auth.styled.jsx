import styled, { css } from 'styled-components';
import image from '../assets/product-img/hero_img3.jpg';
import image2 from '../assets/product-img/hero_img2.jpg';

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
`;

export const Form = styled.form`
  max-width: 500px;
  width: 100%;
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
`;
