import { Logo, NavBar, Navlist } from '../header/Header.styled';
import { Figure } from '../image/image.styled';
import logo from '../../assets/Oi-logo.png';
import { Copyright, FooterContainer, Hr } from './footer.styled';
import { Para } from '../heading/headings.styled';

const Footer = ({ route }) => {
  return (
    <FooterContainer>
      <Figure logo>
        <a href={route}>
          <Logo src={logo} alt="Oi chat logo" />
        </a>
      </Figure>
      <Para>Experience the future.</Para>
      <NavBar>
        <a href="/">
          <Navlist>Home</Navlist>
        </a>
        <a href="#about">
          <Navlist>About</Navlist>
        </a>
        <a href="#feature">
          <Navlist>Features</Navlist>
        </a>
        <a href="#contribute">
          <Navlist>Contribute</Navlist>
        </a>
      </NavBar>
      <Hr />
      <Copyright>
        <Para>
          Build with <span style={{color: "red"}}>&hearts;</span> by <a href="https://st-pardon.netlify.app">St. Pardon</a>{' '}
          &copy; 2023. All Right Reserved. <a href="#">Terms of use</a> |{' '}
          <a href="#">Privacy Policy</a>
        </Para>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
