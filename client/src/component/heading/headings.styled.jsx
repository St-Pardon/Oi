import styled, { css } from 'styled-components';

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
`;

export const HeadingH3 = styled.h3`
  ${(props) =>
    props.user &&
    css`
      font-size: 1.5rem;
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
`;
