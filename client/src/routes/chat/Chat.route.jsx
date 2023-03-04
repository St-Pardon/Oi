import Chatlist from '../../component/chatlist/Chatlist.component';
import { ChatContainer } from './chat.styled';
import { Outlet } from 'react-router-dom';
import Header from '../../component/header/Header.component';

const Chat = () => {
  return (
    <>
      <Header />
      <ChatContainer>
        <Chatlist />
        <Outlet />
      </ChatContainer>
    </>
  );
};

export default Chat;
