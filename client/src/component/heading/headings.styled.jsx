import styled, { css } from 'styled-components';
import { devices } from '../../utils/breakpoint.utils';

export const HeadingH2 = styled.h2`
  ${(props) =>
    props.hero &&
    css`
      font-size: 3rem;
      line-height: 50px;
      margin-bottom: 0.5em;
    `}
  ${(props) =>
    props.profile &&
    css`
      font-size: 2.5rem;
      text-transform: capitalize;
    `}
  ${(props) =>
    props.welcome &&
    css`
      font-size: 3.5rem;
    `}
  ${(props) =>
    props.team &&
    css`
      text-align: center;
    `}
  @media ${devices.mobileL} {
    ${(props) =>
      props.hero &&
      css`
        font-size: 1.7rem;
      `}
  }
`;

export const HeadingH3 = styled.h3`
  ${(props) =>
    props.user &&
    css`
      font-size: 1.5rem;
      color: #075471;
      text-transform: capitalize;
    `}

  ${(props) =>
    props.name &&
    css`
      text-transform: capitalize;
    `}

  ${(props) =>
    props.contribute &&
    css`
      font-size: 2.3rem;
    `}

    @media ${devices.tablet} {
    ${(props) =>
      props.team &&
      css`
        text-align: center;
      `}
    ${(props) =>
      props.feature &&
      css`
        margin: 10px 5px 10px 15px;
      `}
  }
`;

export const Span = styled.span`
  ${(props) =>
    props.hero &&
    css`
      font-size: 1.25em;
      color: #075471;
      font-family: 'Dancing Script', cursive;
    `}
  ${(props) =>
    props.exclamation &&
    css`
      color: #3ababf;
    `}
`;

export const Para = styled.p`
  ${(props) =>
    props.hero &&
    css`
      font-size: 1.5rem;
      margin-bottom: 0.5em;
    `}

  ${(props) =>
    props.about &&
    css`
      line-height: 40px;
    `}
    
    ${(props) =>
    props.team &&
    css`
      line-height: 30px;
      margin: 20px 0;
    `}

    @media ${devices.tablet} {
    ${(props) =>
      props.hero &&
      css`
        font-size: 1rem;
        padding: 5px;
      `}
    ${(props) =>
      props.hero &&
      css`
        font-size: 1rem;
        padding: 5px;
      `}
      ${(props) =>
      props.team &&
      css`
        margin: 10px;
      `}
      ${(props) =>
      props.qr &&
      css`
        display: none;
      `}
      ${(props) =>
      props.about &&
      css`
        font-size: 1rem;
        margin: 10px;
        padding: 0;
      `}
  }
`;
