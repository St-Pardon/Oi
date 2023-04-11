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
import { Link } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';
import { useGetUser } from '../../services/query/query.service';
import { HeadingH3 } from '../heading/headings.styled';
import Dropdown from '../dropdown/dropdown.component';
import { useState } from 'react';
import Modal from '../modal/Modal.component';

const Header = ({ route, isAuthenticated }) => {
  const { data, isLoading } = useGetUser(localStorage.getItem('userId'));
  const [open, setOpen] = useState({ option: false, notification: false });

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
              mode='notification'
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
              <Img src={avi} alt="user avatar" />
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
              mode='option'
              // profile
              // style={open.option ? { display: 'block' } : { display: 'none' }}
            >
              <Dropdown>
                <p>Profile</p>
                <p>Settings</p>
                <p>Help</p>
                <p>Sign Out</p>
              </Dropdown>
            </Modal>
          </Div>
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
