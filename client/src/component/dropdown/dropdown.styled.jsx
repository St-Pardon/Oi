import styled, { css } from 'styled-components';

export const DropDownContatiner = styled.div`
  ${(props) =>
    props.outer &&
    css`
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.2);
    `}
  ${(props) =>
    props.inner &&
    css`
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 20px;
    `}
`;
