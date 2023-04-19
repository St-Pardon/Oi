import styled, { css } from 'styled-components';

export const Section = styled.section`
  display: flex;
  padding: 50px 0;

  ${(props) =>
    props.feature &&
    css`
      background-color: #3ababfaa;
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
`;

export const HeroTextContatiner = styled.div`
  width: 49%;
  display: flex;
  align-items: center;
  padding: 0 20px;

  ${(props) =>
    props.hero &&
    css`
      text-align: right;
    `};

  ${(props) =>
    props.team &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `};
`;

export const ListItem = styled.li`
  list-style: none;

  &::before {
    content: '💬';
    margin-right: 20px;
  }
`;
