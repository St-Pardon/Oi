import styled, { css } from 'styled-components';

export const RequestContainer = styled.div`
  width: 100%;

  ${(props) =>
    props.main &&
    css`
      display: grid;
      grid-template-columns: 1fr 140px;
      align-items: center;
      background-color: #f4f4f4;
      padding: 15px 0;
      margin-bottom: 30px;
      border-radius: 5px;
    `}

  ${(props) =>
    props.name &&
    css`
      display: flex;
      gap: 10px;
      padding-left: 10px;
    `}
`;
