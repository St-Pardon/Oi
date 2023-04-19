import {
  HeaderContainer,
  Nav,
  Logo,
  Navlist,
  NavBar,
  Div,
} from './Header.styled';
import logo from '../../assets/Oi-logo.png';
import avi from '../../assets/avatar/avi.png';
import { BtnContainer, Button } from '../button/Button.component';
import { Figure, Img } from '../image/image.styled';
import { Link, Navigate } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';
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
    setIsAuthenticated(false);
    <Navigate replace to="/signin" />;
    localStorage.clear();
  };
  return (
    <HeaderContainer>
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
              // mode={true}
              // notification
              // style={
              //   open.notification ? { display: 'block' } : { display: 'none' }
              // }
            >
              <Dropdown>
                <p>Notifications</p>
              </Dropdown>
            </Modal>
          </Div>
          <Div
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
              // profile
              // style={open.option ? { display: 'block' } : { display: 'none' }}
            >
              <Dropdown>
                <Link to={`profile/${localStorage.getItem('userId')}`}>
                  <p>Profile</p>
                </Link>
                <p>Settings</p>
                <p>Help</p>
                <p onClick={handleSignOut}>Sign Out</p>
              </Dropdown>
            </Modal>
          </Div>
        </Nav>
      ) : (
        <Nav>
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
