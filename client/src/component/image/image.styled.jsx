import styled, { css } from 'styled-components';

export const Figure = styled.figure`
  overflow: hidden;

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

  ${(props) =>
    props.user &&
    css`
      width: 50px;
      height: 50px;
      border-radius: 100%;
    `}
`;

export const Img = styled.img`
  width: 100%;
`;
