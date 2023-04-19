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
import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { useGetUser } from '../../services/query/query.service';

const Messages = () => {
  const { userId } = useParams();
  const { data, isLoading } = useGetUser(userId);
  const { chat, msgs, handleSend, setChat, setTo } = useOutletContext();

  useEffect(() => {
    setTo(userId);
  }, [userId]);

  const sendChat = (e) => {
    setTo(userId);
    handleSend(e);
  };

  return (
    <ChatContainer>
      <ChatSection>
        <HeaderSection>
          <Link to={'profile'}>
            <UserInfo>
              <Figure user>
                <Img src={data?.display_picture} alt="user avatar" />
              </Figure>
              {isLoading ? null : (
                <HeadingH3 user>
                  {data.display_name
                    ? data.display_name
                    : `${data.first_name} ${data.last_name}`}
                </HeadingH3>
              )}
            </UserInfo>
          </Link>
          <MdOutlineMoreHoriz size={'30px'} />
        </HeaderSection>
        <ChatMessages>
          {msgs
            .filter(
              ({ to, from }) =>
                (to === localStorage.getItem('userId') && from === userId) ||
                (to === userId && from === localStorage.getItem('userId')) ||
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
