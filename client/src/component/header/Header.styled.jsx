import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  color; #000000;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

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
`;

export const NavBar = styled.ul`
  list-style: none;
  align-items: center;
  display: flex;
`;

export const Navlist = styled.li`
  color: #3ababf;
  padding: 7px 20px;
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

  &:hover ${ShowDropDown} {
    display: block;
  }
`;
