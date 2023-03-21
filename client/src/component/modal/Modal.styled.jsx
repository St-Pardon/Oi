import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 20px -5px #00000022;
  box-shadow: 0px 0px 20px -5px #00000022;
  max-width: 1000px;
  width: 90%;
  min-height: 600px;
  background-color: white;
`;

export const CloseModal = styled.button`
  background-color: unset;
  border: none;
  float: right;
  margin: 10px 15px 0 0;
  cursor: pointer;
  font-size: 25px;
  color: #fff;
`;

export const Overlay = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9;
  position: fixed;
  background-color: #2a2a2aaa;
`;
