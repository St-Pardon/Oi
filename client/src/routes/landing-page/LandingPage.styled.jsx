import styled, { css } from 'styled-components';
import { devices } from '../../utils/breakpoint.utils';

export const Section = styled.section`
  display: flex;
  padding: 50px 0;

  ${(props) =>
    props.feature &&
    css`
      background-color: #3ababfaa;
    `}

  ${(props) =>
    props.teamcon &&
    css`
      display: block;
    `}

  ${(props) =>
    props.team &&
    css`
      justify-content: center;
      gap: 20px;
    `}

  ${(props) =>
    props.contribute &&
    css`
      flex-direction: column;
      align-items: center;
    `}
      
  ${(props) =>
    props.qrcode &&
    css`
      justify-content: space-around;
      align-items: center;
      width: 100%;
    `}

  @media ${devices.tablet} {
    ${(props) =>
      props.hero &&
      css`
        display: block;
      `}
    ${(props) =>
      props.feature &&
      css`
        display: block;
      `}
    ${(props) =>
      props.about &&
      css`
        flex-direction: column-reverse;
      `}
    ${(props) =>
      props.team &&
      css`
        display: block;
        padding: 0;
      `}
      ${(props) =>
      props.contribute &&
      css`
        padding: 0 0 20px 0;
      `}
      ${(props) =>
      props.qrcode &&
      css`
        padding: 0;
        display: block;
      `}
  }
`;

export const HeroTextContatiner = styled.div`
  width: 49%;
  display: flex;
  align-items: center;
  padding: 0 20px;

  ${(props) =>
    props.hero &&
    css`
      // text-align: right;
    `};

  ${(props) =>
    props.team &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `};

  @media ${devices.tablet} {
    ${(props) =>
      props.hero &&
      css`
        width: 100%;
        padding: 0;
        text-align: center;
      `}
    ${(props) =>
      props.about &&
      css`
        text-align: justify;
      `}
    ${(props) =>
      props.feature &&
      css`
        width: 100%;
        padding: 0;
      `}
    ${(props) =>
      props.team &&
      css`
        width: 100%;
        text-align: justify;
        align-items: center;
        padding: 0;
      `}
  }
`;

export const Ul = styled.ul`
  @media ${devices.tablet} {
    padding: 0;
    margin: 10px 5px 10px 15px;
  }
`;

export const ListItem = styled.li`
  list-style: none;

  &::before {
    content: '💬';
    margin-right: 20px;
  }
  @media ${devices.mobileL} {
  }
`;

export const Br = styled.br`
  @media ${devices.tablet} {
    display: none;
  }
`;

export const Spx = styled.span`
  display: none;

  @media ${devices.tablet} {
    display: inline;
  }
`;
