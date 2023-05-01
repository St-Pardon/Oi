import styled, { css } from 'styled-components';
import { devices } from '../../utils/breakpoint.utils';

export const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  color; #000000;
  align-items: center;
  z-index: 10;
`;

export const Nav = styled.nav`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${(props) =>
    props.nav &&
    css`
      width: 80%;
    `}

  ${(props) =>
    props.logo &&
    css`
      justify-content: flex-start;
    `}

  ${(props) =>
    props.auth &&
    css`
      gap: 10px;
    `}

    ${(props) =>
      props.mvsb &&
      css`
        display: none;
      `}

  @media ${devices.mobileL} {
    ${(props) =>
      props.nav &&
      css`
        width: 32%;
      `}
    ${(props) =>
      props.logo &&
      css`
        width: 25%;
        justify-content: center;
      `} 
    ${(props) =>
      props.mvsb &&
      css`
        display: block;
        width: 32%;
        justify-content: flex-start;
      `}
  }
`;

export const NavBar = styled.ul`
  list-style: none;
  align-items: center;
  display: flex;

  ${(props) =>
    props.tab &&
    css`
      display: none;
    `}
  @media ${devices.tablet} {
    ${(props) =>
      props.main &&
      css`
        display: none;
      `}

    ${(props) =>
      props.tab &&
      css`
        display: block;
      `}
  }
`;

export const Navlist = styled.li`
  color: #3ababf;
  padding: 7px 20px;
  list-style: none;

  &:hover {
    background-color: #075471;
  }
`;

export const Logo = styled.img`
  width: 100%;
  //   height: 100%;
`;

export const ShowDropDown = styled.div`
  position: absolute;
  top: 50px;
  display: none;
  // border: 2px solid red;

  ${(props) =>
    props.profile &&
    css`
      left: 0;
      min-width: 150px;
    `}

  ${(props) =>
    props.notification &&
    css`
      left: -150px;
      min-width: 300px;
    `}
`;

export const Div = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;

  ${(props) =>
    props.user &&
    css`
      cursor: pointer;
    `}

  &:hover ${ShowDropDown} {
    display: block;
  }
`;
