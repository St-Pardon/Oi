import styled, { css } from 'styled-components';

export const Figure = styled.figure`
  ${(props) =>
    props.logo &&
    css`
      width: 100px;
    `}

  ${(props) =>
    props.hero &&
    css`
      width: 49%;
    `}
`;

export const Img = styled.img`
  width: 100%;
`;
