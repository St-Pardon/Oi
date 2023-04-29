import {
  HeaderContainer,
  Nav,
  Logo,
  Navlist,
  NavBar,
  Div,
} from './Header.styled';
import logo from '../../assets/Oi-logo.png';
import { BtnContainer, Button } from '../button/Button.component';
import { Figure, Img } from '../image/image.styled';
import { Link, Navigate } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';
import { RiMenu4Fill } from 'react-icons/ri';
import { useGetUser } from '../../services/query/query.service';
import { HeadingH3 } from '../heading/headings.styled';
import Dropdown from '../dropdown/dropdown.component';
import { useState } from 'react';
import Modal from '../modal/Modal.component';

const Header = ({ route, isAuthenticated, setIsAuthenticated }) => {
  let { data, isLoading } = { data: '', isLoading: '' };

  if (isAuthenticated || localStorage.getItem('token')) {
    const { data: newData, isLoading: loading } = useGetUser(
      localStorage.getItem('userId')
    );
    data = newData;
    isLoading = loading;
  }
  const [open, setOpen] = useState({ option: false, notification: false });

  const handleSignOut = () => {
    if (localStorage.getItem('userId')) {
      <Navigate replace to="/signin" />;
      setIsAuthenticated(false);
      localStorage.clear();
      window.location.reload(false);
      return;
    }
    <Navigate replace to="/signin" />;
    window.location.reload(false);
  };
  return (
    <HeaderContainer>
      {/* mvsb - mobile view signup button  */}
      <Nav mvsb>
        <Link to={'/signup'}>
          <Button>Sign Up</Button>
        </Link>
      </Nav>
      <Nav logo>
        <Figure logo>
          <a href={route}>
            <Logo src={logo} alt="Oi chat logo" />
          </a>
        </Figure>
      </Nav>
      {isAuthenticated || localStorage.getItem('token') ? (
        <Nav auth>
          {/* nofification icon */}
          <Div
            onClick={() =>
              setOpen({
                ...open,
                option: false,
                notification: !open.notification,
              })
            }
          >
            <MdNotifications size={'25px'} color="blue" />
            <Modal
              open={open.notification}
              onClose={() =>
                setOpen({
                  ...open,
                  option: false,
                  notification: !open.notification,
                })
              }
              mode="notification"
            >
              <Dropdown>
                <p>Notifications</p>
              </Dropdown>
            </Modal>
          </Div>
          <Div
            user
            onClick={() =>
              setOpen({
                ...open,
                option: !open.option,
                notification: false,
              })
            }
          >
            <Figure header>
              <Img src={data?.display_picture} alt="user avatar" />
            </Figure>
            {isLoading ? null : (
              <HeadingH3
                name
              >{`${data.first_name} ${data.last_name}`}</HeadingH3>
            )}
            <Modal
              open={open.option}
              onClose={() =>
                setOpen({
                  ...open,
                  option: !open.option,
                  notification: false,
                })
              }
              mode="option"
            >
              <Dropdown>
                <Link to={`profile/${localStorage.getItem('userId')}`}>
                  <Navlist>Profile</Navlist>
                </Link>
                <Link to={''}>
                  <Navlist>Settings</Navlist>
                </Link>
                <Link to={''}>
                  <Navlist>Help</Navlist>
                </Link>
                <Link to={''}>
                  <Navlist onClick={handleSignOut}>Sign Out</Navlist>
                </Link>
              </Dropdown>
            </Modal>
          </Div>
        </Nav>
      ) : (
        <Nav nav>
          <NavBar main>
            <a href="/">
              <Navlist unauth>Home</Navlist>
            </a>
            <a href="#about">
              <Navlist unauth>About</Navlist>
            </a>
            <a href="#feature">
              <Navlist unauth>Features</Navlist>
            </a>
            <a href="#contribute">
              <Navlist unauth>Contribute</Navlist>
            </a>
          </NavBar>
          <BtnContainer>
            <Link to={'/signup'}>
              <Button>Sign Up</Button>
            </Link>
            <Link to={'/signin'}>
              <Button primary>Signin</Button>
            </Link>
          </BtnContainer>
          <NavBar tab>
            <RiMenu4Fill size={'30px'} />
          </NavBar>
        </Nav>
      )}
    </HeaderContainer>
  );
};

export default Header;
