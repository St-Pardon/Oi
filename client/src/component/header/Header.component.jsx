import { HeaderContainer, Nav, Logo, Navlist, NavBar } from './Header.styled';
import logo from '../../assets/Oi-logo.png';
import { BtnContainer, Button } from '../button/Button.component';
import { Figure } from '../image/image.styled';
import { Link } from 'react-router-dom';

const Header = ({ route }) => {
  return (
    <HeaderContainer>
      <Nav logo>
        <Figure logo>
          <a href={route}>
            <Logo src={logo} alt="Oi chat logo" />
          </a>
        </Figure>
      </Nav>
      <Nav>
        <NavBar>
          <Navlist>Home</Navlist>
          <Navlist>About</Navlist>
          <Navlist>Features</Navlist>
          <Navlist>Contribute</Navlist>
        </NavBar>
        <BtnContainer>
          <Link to={'signin'}>
            <Button>Sign Up</Button>
          </Link>
          <Link to={'signup'}>
            <Button primary>Signin</Button>
          </Link>
        </BtnContainer>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
