import styled, { css } from 'styled-components';
import { devices } from '../../utils/breakpoint.utils';

export const Overlay = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
    props.team &&
    css`
      width: 200px;
      height: 200px;
      border-radius: 100%;
      border: 3px solid #f2f2f233;
      overflow: hidden;
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
      position: relative;

      &:hover ${Overlay} {
        display: flex;
      }
    `}
  ${(props) =>
    props.welcome &&
    css`
      border-radius: 0;
    `}
  
  ${(props) =>
    props.contribute &&
    css`
      width: 200px;
      height: 200px;
      margin: 0 auto;
    `}
  @media ${devices.tablet} {
    ${(props) =>
      props.hero &&
      css`
        width: 100%;
      `}
    ${(props) =>
      props.team &&
      css`
        margin: 0 auto;
      `}
  }
  @media ${devices.mobileL} {
    ${(props) =>
      props.logo &&
      css`
        width: 80px;
      `}
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
