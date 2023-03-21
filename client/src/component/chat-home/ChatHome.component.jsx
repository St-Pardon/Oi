import billy from '../../assets/billy.png';
import { HeadingH2, Span } from '../heading/headings.styled';
import { Figure, Img } from '../image/image.styled';
import { ChatHomeContainer, TextContainer } from './ChatHome.styled';
const ChatHome = () => {
  return (
    <ChatHomeContainer main>
      <div>
        <ChatHomeContainer>
          <HeadingH2 welcome>
            <Span hero>
              Oi<Span exclamation>!</Span>
            </Span>
          </HeadingH2>
          <Figure profile welcome>
            <Img src={billy} alt="Billy Butcher saying Oi!" />
          </Figure>
        </ChatHomeContainer>
        <TextContainer>
            <HeadingH2>
            <Span hero>
              Oi<Span exclamation>!</Span>
            </Span> WebChat
          </HeadingH2>
            <p>Send and Receive Messages from your Loved ones</p>
        </TextContainer>
      </div>
    </ChatHomeContainer>
  );
};

export default ChatHome;
