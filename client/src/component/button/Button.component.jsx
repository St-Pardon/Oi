import styled, { css } from 'styled-components';
import { devices } from '../../utils/breakpoint.utils';

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid #075471;
  color: #075471;
  margin: 0.5em 1em 0.5em 0em;
  padding: 0.5em 1.5em;

  &:hover {
    opacity: 80%;
    color: white;
    background-color: #075471;
  }

  ${(props) =>
    props.primary &&
    css`
      background: #075471;
      color: white;
      &:hover {
        color: white;
      }
    `}
  ${(props) =>
    props.danger &&
    css`
      background: rgb(155, 44, 44);
      border-color: rgb(155, 44, 44);
      color: white;

      &:hover {
        background: rgb(155, 44, 44);
        color: white;
      }
    `}
  ${(props) =>
    props.hero &&
    css`
      font-size: 1.2rem;
    `}

  ${(props) =>
    props.send &&
    css`
      font-size: 1.2rem;
    `}

  ${(props) =>
    props.request &&
    css`
      margin: 0;
    `}

  ${(props) =>
    props.edit &&
    css`
      display: flex;
      align-items: center;
      gap: 10px;
    `}

  ${(props) =>
    props.save &&
    css`
      display: flex;
      align-items: center;
      gap: 10px;
      background: #075471;
      color: white;

      &:hover {
        background: white;
        color: #075471;
      }
    `}
`;

export const BtnContainer = styled.div`
  text-align: center;
  margin-left: 2em;
  
  @media ${devices.mobileL} {
    display: none;
  }
`;
