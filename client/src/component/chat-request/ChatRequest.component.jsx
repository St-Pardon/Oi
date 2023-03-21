import { HeadingH3 } from '../heading/headings.styled';
import { Figure, Img } from '../image/image.styled';
import avi from '../../assets/avatar/avi.png';
import { Button } from '../button/Button.component';
import { RequestContainer } from './ChatRequest.styled';

const ChatRequest = ({ first_name, last_name, username }) => {    
  return (
    <RequestContainer main>
      <RequestContainer name>
        <Figure user>
          <Img src={avi} alt="user avatar" />
        </Figure>
        <div>
          <HeadingH3>
            {first_name} {last_name}
          </HeadingH3>
          <p>
            <em>@{username}</em>
          </p>
        </div>
      </RequestContainer>
      <div>
        <Button primary request>Send Request</Button>
      </div>
    </RequestContainer>
  );
};

export default ChatRequest;
