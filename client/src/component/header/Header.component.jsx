import { HeaderContainer, Nav, Logo, Navlist, NavBar } from './Header.styled';
import logo from '../../assets/Oi-logo.png';
import avi from '../../assets/avatar/avi.png';
import { BtnContainer, Button } from '../button/Button.component';
import { Figure, Img } from '../image/image.styled';
import { Link } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';
import { useGetUser } from '../../services/query/query.service';
import { HeadingH3 } from '../heading/headings.styled';

const Header = ({ route, isAuthenticated }) => {
  const {data, isLoading} = useGetUser(localStorage.getItem('userId'))
  return (
    <HeaderContainer>
      <Nav logo>
        <Figure logo>
          <a href={route}>
            <Logo src={logo} alt="Oi chat logo" />
          </a>
        </Figure>
      </Nav>
      {isAuthenticated ? (
        <Nav auth>
          {/* nofification icon */}
          <MdNotifications size={'25px'} color="blue" />
          <Figure header>
            <Img src={avi} alt="user avatar" />
          </Figure>
          {isLoading ? null :
          <HeadingH3>{`${data.first_name} ${data.last_name}`}</HeadingH3>
          }
        </Nav>
      ) : (
        <Nav>
          <NavBar>
            <Navlist>Home</Navlist>
            <Navlist>About</Navlist>
            <Navlist>Features</Navlist>
            <Navlist>Contribute</Navlist>
          </NavBar>
          <BtnContainer>
            <Link to={'/signup'}>
              <Button>Sign Up</Button>
            </Link>
            <Link to={'/signin'}>
              <Button primary>Signin</Button>
            </Link>
          </BtnContainer>
        </Nav>
      )}
    </HeaderContainer>
  );
};

export default Header;
