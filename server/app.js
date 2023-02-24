import express from 'express';
import http from 'http';
import { Server as Socket } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = new express();
const server = http.createServer(app);
const io = new Socket(server);

app
  .use(cors())
  .use(express.json())
  .use(express.static('public'))
  .use(express.urlencoded({ extended: false }))
  .get('/', (req, res) => {
    res.status(200).end('Kindly signin or signup');
  })
  .post('signup', (req, res) => {
    const { username, password, first_name, last_name, date_of_birth } =
      req.body;
    res.status(200).send('signup successful');
  })
  .post('signin', (req, res) => {
    const { username, password } = req.body;
    res.status(200).send('signup successful');
  })
  .post('newchat', (req, res) => {})
  .get('chatlist', (req, res) => {})
  .get('chat:id', (req, res) => {})
  .post('chat:id', (req, res) => {});

io.on('connection', (socket) => {
  console.log('We have a new connection', socket.id);

  socket.on('chat', (data) => {
    console.log(data);
    
    if (data.socketid) {
      io.to(data.socketid).to(socket.id).emit('chat', data);
    } else {
      io.sockets.emit('chat', data);
    }
  });

  socket.on('disconnect', () => {
    console.log('User left');
  });
});

server.listen(PORT, () => {
  console.log(`server is running on http://127.0.0.1:${PORT}`);
});
