import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid #075471;
  color: #075471;
  margin: 0.5em 1em 0.5em 0em;
  padding: 0.5em 1.5em;
  
  &:hover{
      opacity: 80%;
      color: white;
      background-color: #075471;
  }

  ${(props) =>
    props.primary &&
    css`
      background: #075471;
      color: white;
      &:hover{
          color: white;
      }
    `}
  ${(props) =>
    props.hero &&
    css`
      font-size: 1.2rem
    `}
`;

export const BtnContainer = styled.div`
  text-align: center;
  margin-left: 2em;
`;
