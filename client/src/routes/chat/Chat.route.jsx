import Chatlist from '../../component/chatlist/Chatlist.component';
import { ChatContainer } from './chat.styled';
import { Outlet } from 'react-router-dom';
import Header from '../../component/header/Header.component';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';

let socket;
const URI = 'https://oi-n1ic.onrender.com';

const Chat = ({ isAuthenticated, connect, setIsAuthenticated }) => {
  const [chat, setChat] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [to, setTo] = useState('');

  // Note: use ContextAPI to move socket component here
  const connectChat = (username) => {
    socket.auth = { username };
    socket.connect();
  };

  useEffect(() => {
    socket = io(URI, {
      autoConnect: false,
      withCredentials: true,
      extraHeaders: {},
    });

    if (connect) connectChat(localStorage.getItem('userId'));
  }, [connect]);

  useEffect(() => {
    socket.on('message', ({ chat, to, from }) => {
      setMsgs((msgs) => [...msgs, { chat, to, from }]);
    });
    socket.on('disconnect', () => {
      console.log('user left');
      socket.emit('backup', msgs);
    });
  }, [connect]);

  const handleSend = () => {
    if (chat) {
      socket.emit(
        'chat',
        { to, from: localStorage.getItem('userId'), chat },
        () => setChat('')
      );
      setChat('');
    }
  };

  return (
    <>
      <Header setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
      <ChatContainer>
        <Chatlist />
        <Outlet context={{ chat, setChat, msgs, handleSend, setTo }} />
      </ChatContainer>
    </>
  );
};

export default Chat;
