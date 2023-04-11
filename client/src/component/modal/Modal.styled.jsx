import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;

  ${(props) =>
    props.mode &&
    css`
      -webkit-box-shadow: 0px 0px 20px -5px #00000022;
      box-shadow: 0px 0px 20px -5px #00000022;
      background-color: white;
      min-height: 600px;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      max-width: 1000px;
      width: 90%;
    `}

  ${(props) =>
    props.notification &&
    css`
      min-height: 150px;
      top: 55px;
      right: 50px;
      min-width: 300px;
    `}

  ${(props) =>
    props.option &&
    css`
      min-height: 150px;
      top: 55px;
      right: 15px;
      min-width: 160px;
    `}
`;

export const CloseModal = styled.button`
  ${(props) =>
    props.mode &&
    css`
      background-color: unset;
      border: none;
      float: right;
      margin: 10px 15px 0 0;
      cursor: pointer;
      font-size: 25px;
      color: #fff;
    `}

  ${(props) =>
    props.notification &&
    css`
      display: none;
    `}

  ${(props) =>
    props.option &&
    css`
      display: none;
    `}
`;

export const Overlay = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9;
  position: fixed;
  background-color: transparent;

  ${(props) =>
    props.mode &&
    css`
      background-color: #2a2a2aaa;
    `}
`;
