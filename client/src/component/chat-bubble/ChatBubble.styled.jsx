import styled, { css } from 'styled-components';

export const BubbleContainer = styled.div`
  display: flex;
  margin: 10px 0;
  ${(props) =>
    props.recieve &&
    css`
      justify-content: flex-start;
    `}

  ${(props) =>
    props.send &&
    css`
      justify-content: flex-end;
    `}
`;

export const Bubble = styled.p`
  display: inline-block;
  max-width: 80%;
  font-size: 1rem;
  border-radius: 10px;
  padding: 10px 13px;
  color: #fff;
  position: relative;
  margin: 0 20px;

  ${(props) =>
    props.recieve &&
    css`
      background-color: #3ababf;

      &::before {
        content: ' ';
        border-width: 11px;
        // border-color: transparent rgb(58, 186, 191) transparent transparent;
        border-color: rgb(58, 186, 191);
        border-style: solid;
        display: inline-block;
        position: absolute;
        top: 0px;
        left: -10px;
        border-bottom-left-radius: 100px;
      }
    `}

  ${(props) =>
    props.send &&
    css`
      background-color: #075471;

      &::after {
        content: ' ';
        border-width: 11px;
        border-color: #075471;
        border-style: solid;
        display: inline-block;
        position: absolute;
        top: 0px;
        right: -10px;
        border-bottom-right-radius: 100px;
      }
    `}
`;
