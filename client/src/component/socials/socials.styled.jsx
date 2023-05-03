import styled, { css } from 'styled-components';
import { devices } from '../../utils/breakpoint.utils';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 550px;
  width: 100%;
  flex-wrap: wrap;

  @media ${devices.tablet}{
    justify-content: space-evenly;
    row-gap: 20px;
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 20px;
  border-radius: 25px;
  color: white;

  ${(props) =>
    props.twitter &&
    css`
      background-color: #00acee;
      border: 1px solid #00acee;

      &:hover {
        background-color: #fff;
        color: #00acee;
      }
    `}
  ${(props) =>
    props.linkedin &&
    css`
      background-color: #0072b1;
      border: 1px solid #0072b1;

      &:hover {
        background-color: #fff;
        color: #0072b1;
      }
    `}   
  ${(props) =>
    props.github &&
    css`
      background-color: #171515;
      border: 1px solid #171515;

      &:hover {
        background-color: #fff;
        color: #171515;
      }
    `}   
  ${(props) =>
    props.site &&
    css`
      background-color: #90EE90;
      border: 1px solid #90EE90;

      &:hover {
        background-color: #fff;
        color: #90EE90;
      }
    `}
`;
