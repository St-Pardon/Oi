import styled, { css } from 'styled-components';

export const HeadingH2 = styled.h2`
  ${(props) =>
    props.hero &&
    css`
      font-size: 3rem;
      line-height: 50px;
      margin-bottom: 0.5em;
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
`;
