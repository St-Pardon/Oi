import { Figure, Img } from '../../component/image/image.styled';
import {
  ChatContainer,
  ChatInput,
  ChatMessages,
  ChatSection,
  HeaderSection,
  SendSection,
  UserInfo,
} from './Messages.styled';
import img from '../../assets/avatar/avi.png';
import { HeadingH3 } from '../../component/heading/headings.styled';
import { Button } from '../../component/button/Button.component';
import ChatBubble from '../../component/chat-bubble/ChatBubble.component';
import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { useGetUser } from '../../services/query/query.service';

const Messages = ({ user, chat, msgs, handleSend, setChat, to, setTo }) => {
  const { recipient } = useParams();
  const {data, isLoading} = useGetUser(recipient)

  useEffect(() => {
    setTo(recipient);
  }, [recipient]);


  const sendChat = (e) => {
    setTo(recipient);
    handleSend(e);
  };

  return (
    <ChatContainer>
      <ChatSection>
        <HeaderSection>
          <Link to={'profile'}>
          <UserInfo >
            <Figure user>
              <Img src={img} alt="user avatar" />
            </Figure>{
              isLoading ? null :
              <HeadingH3 user>{data.display_name ? data.display_name : `${data.first_name} ${data.last_name}`}</HeadingH3>
            }
          </UserInfo>
          </Link>
          <MdOutlineMoreHoriz size={'30px'} />
        </HeaderSection>
        <ChatMessages>
          {msgs
            .filter(
              ({ to, from }) =>
                (to === localStorage.getItem('userId') && from === recipient) ||
                (to === recipient && from === localStorage.getItem('userId')) ||
                from === 'admin'
            )
            .map(({ chat, from }, i) => {
              return (
                <ChatBubble
                  key={i}
                  sender={
                    from === localStorage.getItem('userId') ? true : false
                  }
                  msg={chat}
                />
              );
            })}
        </ChatMessages>
        <SendSection>
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
      </ChatSection>
      <Outlet />
    </ChatContainer>
  );
};

export default Messages;
