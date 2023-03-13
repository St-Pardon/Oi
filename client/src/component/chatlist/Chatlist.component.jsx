import { Figure, Img } from '../image/image.styled';
import { ChatlistContainer, User } from './chatlist.styled';
import avi from '../../assets/avatar/avi.png';
import { HeadingH3 } from '../heading/headings.styled';
import { Link } from 'react-router-dom';
import { useChatlist } from '../../services/query/query.service';

const Chatlist = ({ user }) => {
  const { isLoading, data } = useChatlist(user);

  return (
    <ChatlistContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((item, i) => (
          <Link to={item} key={i}>
            <User>
              <Figure user>
                <Img src={avi} alt="User's avatar" />
              </Figure>
              <HeadingH3 user>{item}</HeadingH3>
            </User>
          </Link>
        ))
      )}
    </ChatlistContainer>
  );
};
export default Chatlist;
