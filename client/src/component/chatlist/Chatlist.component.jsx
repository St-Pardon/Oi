import { Figure, Img } from '../image/image.styled';
import { ChatlistContainer, User } from './chatlist.styled';
import avi from '../../assets/avatar/avi.png';
import { HeadingH3 } from '../heading/headings.styled';
import { Link } from 'react-router-dom';

const Chatlist = () => {
  return (
    <ChatlistContainer>
      <Link to={`/chat/`}>
        <User>
          <Figure user>
            <Img src={avi} alt="User's avatar" />
          </Figure>
          <HeadingH3 user>Johndoe</HeadingH3>
        </User>
      </Link>
      <Link to="">
        <User>
          <Figure user>
            <Img src={avi} alt="User's avatar" />
          </Figure>
          <HeadingH3 user>Mike Okoye</HeadingH3>
        </User>
      </Link>
      <Link to="">
        <User>
          <Figure user>
            <Img src={avi} alt="User's avatar" />
          </Figure>
          <HeadingH3 user>Steve Gerad</HeadingH3>
        </User>
      </Link>
      <Link to="">
        <User>
          <Figure user>
            <Img src={avi} alt="User's avatar" />
          </Figure>
          <HeadingH3 user>Tommy Egan</HeadingH3>
        </User>
      </Link>
      <Link to="">
        <User>
          <Figure user>
            <Img src={avi} alt="User's avatar" />
          </Figure>
          <HeadingH3 user>Pardonne</HeadingH3>
        </User>
      </Link>
    </ChatlistContainer>
  );
};
export default Chatlist;
