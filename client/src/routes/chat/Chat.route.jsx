import Chatlist from '../../component/chatlist/Chatlist.component';
import { ChatContainer } from './chat.styled';
import { Outlet } from 'react-router-dom';
import Header from '../../component/header/Header.component';

const Chat = ({ user }) => {
  // Note: use ContextAPI to move socket component here
  return (
    <>
      <Header />
      <ChatContainer>
        <Chatlist user={user} />
        <Outlet />
      </ChatContainer>
    </>
  );
};

export default Chat;
