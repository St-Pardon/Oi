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
  ${(props) =>
    props.header &&
    css`
      width: 35px;
      height: 35px;
      border-radius: 100%;
    `}
  ${(props) =>
    props.profile &&
    css`
      margin: 0 auto;
      width: 200px;
      height: 200px;
      border-radius: 100%;
    `}
  ${(props) =>
    props.welcome &&
    css`
      border-radius: 0;
    `}
`;

export const Img = styled.img`
  width: 100%;
`;
