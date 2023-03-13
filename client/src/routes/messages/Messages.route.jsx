import { Figure, Img } from '../../component/image/image.styled';
import {
  ChatContainer,
  ChatInput,
  ChatMessages,
  HeaderSection,
  SendSection,
  UserInfo,
} from './Messages.styled';
import img from '../../assets/avatar/avi.png';
import { HeadingH3 } from '../../component/heading/headings.styled';
import { Button } from '../../component/button/Button.component';
import ChatBubble from '../../component/chat-bubble/ChatBubble.component';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Messages = ({ user, chat, msgs, handleSend, setChat, to, setTo }) => {
  const { recipient } = useParams();

  useEffect(() => {
    setTo(recipient);
  }, [recipient]);

  const sendChat = (e) => {
    setTo(recipient);
    handleSend(e);
  };

  return (
    <ChatContainer>
      <HeaderSection>
        <UserInfo>
          <Figure user>
            <Img src={img} alt="user avatar" />
          </Figure>
          <HeadingH3 user>John Doe</HeadingH3>
        </UserInfo>
        <p>Option</p>
      </HeaderSection>
      <ChatMessages>
        {msgs
          .filter(
            ({ to, from }) =>
              (to === user && from === recipient) ||
              (to === recipient && from === user) ||
              from === 'admin'
          )
          .map(({ chat, from }, i) => {
            return (
              <ChatBubble
                key={i}
                sender={from === user ? true : false}
                msg={chat}
              />
            );
          })}
      </ChatMessages>
      <SendSection>
        to{' '}
        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        <ChatInput
          type="text"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          placeholder="Type your message here..."
          onKeyDown={(e) => (e.key === 'Enter' ? sendChat(e) : null)}
        />
        <Button primary send onClick={sendChat}>
          Send
        </Button>
      </SendSection>
    </ChatContainer>
  );
};

export default Messages;
