import express from 'express';
import http from 'http';
import { Server as Socket } from 'socket.io';
import cors from 'cors';
import { connectToMongoDB } from './src/config/db.config.js';
import './src/middleware/auth.middleware.js';
import { chatModel } from './src/models/chat.model.js';
import indexRoute from './src/routes/index.route.js';

const PORT = process.env.PORT || 5000;
const app = new express();
const server = http.createServer(app);
const io = new Socket(server, {
  cors: {
    origin: 'https://oi-demo.netlify.app',
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
  .use(indexRoute)
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

io
  // socket missleware to setup userId to chatId
  .use((socket, next) => {
    const username = socket.handshake.auth.username;

    if (!username) {
      return next(new Error({ error: 'invalid username' }));
    }

    socket.username = username;
    next();
  })
  // handles sockect connection
  .on('connection', (socket) => {
    const idx = ChatSession.findIndex(
      (user) => user.username === socket.username
    );

    if (ChatSession && idx !== -1) {
      ChatSession[idx].chatId = socket.id;
    }

    if (idx === -1) {
      ChatSession.push({ chatId: socket.id, username: socket.username });
    }

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
    socket
      .on('chat', ({ to, from, chat }) => {
        let reciver = ChatSession.find((user) => user.username === to);
        io.to(reciver.chatId).to(socket.id).emit('message', { to, from, chat });
      })

      // socket.on('backup', (data) => {
      //   console.log(data);
      // });
      .on('disconnect', () => {
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
