import express from 'express';
import http from 'http';
import { Server as Socket } from 'socket.io';
import cors from 'cors';
import { connectToMongoDB } from './config/db.config.js';
import { userModel } from './models/user.models.js';
import './middleware/auth.middleware.js';
import { chatModel } from './models/chat.model.js';
import AuthRoute from './routes/auth.routes.js';
import UserRoute from './routes/user.routes.js';
import ChatlistRoute from './routes/chatlist.routes.js';
import { moreInfoModel } from './models/moreInfo.model.js';
import ChatRequestRouter from './routes/chat-request.routes.js';

const PORT = process.env.PORT || 5000;
const app = new express();
const server = http.createServer(app);
const v1 = '/api/v1/';
const io = new Socket(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['*'],
    credentials: true,
  },
});
const ChatSession = [];

app
  .use(cors())
  .use(express.json())
  .use(express.static('public'))
  .use(express.urlencoded({ extended: false }))
  .use(`${v1}auth`, AuthRoute)
  .use(`${v1}user/`, UserRoute)
  .use(`${v1}chatlist/`, ChatlistRoute)
  .use(`${v1}request`, ChatRequestRouter)
  .get('/', (req, res) => {
    res.status(200).end('Kindly refer to the API documentation to et started');
  })
  .get('/chats', async (req, res) => {
    const { senderId, recipientId } = req.params;
    const chats = await chatModel.find();
    const history = chats.filter(
      (chat) =>
        (chat.senderId === senderId && chat.recipientId === recipientId) ||
        (chat.recipientId === senderId && chat.senderId === recipientId)
    );
    res.status(200).send(history);
  });

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  console.log(username);
  if (!username) {
    return next(new Error('invalid username'));
  }
  socket.username = username;
  next();
}).on('connection', (socket) => {
  // ChatSession.push({chatId: socket.id});
  ChatSession.push({ chatId: socket.id, username: socket.username });
  console.log('We have a new connection', socket.id);
  console.log(ChatSession);
  socket.emit('message', {
    chat: 'hello everyone',
    to: socket.username,
    from: 'admin',
  });
  // console.log('We have a new connection', socket.username);

  // const users = [];
  // for (let [id, socket] of io.of('/').sockets) {
  //   users.push({
  //     userID: id,
  //     username: socket.username,
  //   });
  // }
  // socket.emit('users', users);

  // console.log('We have a new connection', socket);
  socket.on('chat', ({ to, from, chat }) => {
    let reciver = ChatSession.find((user) => user.username === to);
    io.to(reciver.chatId).to(socket.id).emit('message', { to, from, chat });
  });

  socket.on('backup', (data) => {
    console.log(data);
  });
  socket.on('disconnect', () => {
    ChatSession.splice(
      ChatSession.findIndex((user) => user.chatId === socket.id)
    );
    console.log('User left');
  });
});

connectToMongoDB();
server.listen(PORT, () => {
  console.log(
    `server is up and running \nVisit http://127.0.0.1:${PORT} \nwaiting for database to connect...`
  );
});
