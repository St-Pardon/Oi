import styled, { css } from 'styled-components';

export const ChatHomeContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.main &&
    css`
      width: 100%;
    `}
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;
