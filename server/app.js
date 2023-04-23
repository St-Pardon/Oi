import cors from 'cors';
import http from 'http';
import express from 'express';
import { Server as Socket } from 'socket.io';
import { connectToMongoDB } from './src/config/db.config.js';
import './src/middleware/auth.middleware.js';
import { chatModel } from './src/models/chat.model.js';
import indexRoute from './src/routes/index.route.js';
import { errHandler } from './src/middleware/error.middleware.js';

const PORT = process.env.PORT || 5000;
const app = new express();
const server = http.createServer(app);
const offline = [];
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
  .use(express.urlencoded({ extended: false }))
  .use(errHandler)
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

    if (offline.filter((x) => x.to === socket.username).length > 0) {
      offline
        .filter((x) => x.to === socket.username)
        .forEach((x) => {
          io.to(socket.id)
          .emit('message', { to: x.to, from: x.from, chat: x.chat });
        });
    }
    socket
      .on('chat', ({ to, from, chat }) => {
        let reciver = ChatSession.find((user) => user.username === to);

        if (reciver === undefined) {
          offline.push({ to, from, chat });
          io
            .to(socket.id)
            .emit('message', { to, from, chat });
        } else {
          io.to(reciver.chatId).to(socket.id).emit('message', { to, from, chat });
        }
      })

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
