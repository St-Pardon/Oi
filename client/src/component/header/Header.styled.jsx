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
