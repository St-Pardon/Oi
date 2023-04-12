import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;

  ${(props) =>
    props.$mode === 'newchat' &&
    css`
      min-height: 600px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      -webkit-box-shadow: 0px 0px 20px -5px #00000022;
      box-shadow: 0px 0px 20px -5px #00000022;
      background-color: white;
      max-width: 1000px;
      width: 90%;
    `}

  ${(props) =>
    props.$mode === 'profile' &&
    css`
      min-height: 90vh;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      -webkit-box-shadow: 0px 0px 20px -5px #00000022;
      box-shadow: 0px 0px 20px -5px #00000022;
      background-color: white;
      max-width: 1000px;
      width: 90%;
    `}

  ${(props) =>
    props.$mode === 'notification' &&
    css`
      min-height: 150px;
      top: 55px;
      right: 50px;
      min-width: 300px;
    `}

  ${(props) =>
    props.$mode === 'option' &&
    css`
      min-height: 150px;
      top: 55px;
      right: 15px;
      min-width: 160px;
    `}
`;

export const CloseModal = styled.button`
  ${(props) =>
    props.$mode === 'newchat' &&
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
    props.$mode === 'notification' &&
    css`
      display: none;
    `}
  
    ${(props) =>
    props.$mode === 'profile' &&
    css`
      display: none;
    `}

  ${(props) =>
    props.$mode === 'option' &&
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
    props.$mode === 'profile' &&
    css`
      background-color: #2a2a2aaa;
    `}

  ${(props) =>
    props.$mode === 'newchat' &&
    css`
      background-color: #2a2a2aaa;
    `}
`;
