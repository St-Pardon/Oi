import express from 'express';
import http from 'http';
import { Server as Socket } from 'socket.io';
import cors from 'cors';
import { connectToMongoDB } from './config/db.config.js';
import dotenv from 'dotenv';
import { userModel } from './models/user.models.js';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import './middleware/auth.middleware.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = new express();
const server = http.createServer(app);
const io = new Socket(server);
let chatId;

app
  .use(cors())
  .use(express.json())
  .use(express.static('public'))
  .use(express.urlencoded({ extended: false }))
  .get('/', (req, res) => {
    res.status(200).end('Kindly signin or signup');
  })
  .post(
    '/signup',
    async (req, res, next) => {
    passport.authenticate('signup', async (err, user)=>{
      if (err){
        console.log(err)
        res.status(403).send(err)
      }
      if (!user){
        const error = new Error('Username or password is incorrect');
        console.log(error)
        res.status(403).send("User already exist")
      }
    })(req, res, next)
      // console.log("after middleware")
      // res.status(201).json({
      //   message: 'Signup successful',
      //   user: req.user,
      // });
    }
  )
  .post('/signin', async (req, res, next) => {
    passport.authenticate('signin', async (err, user) => {
      try {
        if (err) {
          return next(err);
        }
        if (!user) {
          const error = new Error('Username or password is incorrect');
          return next(error);
        }
        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);
          const body = { _id: user._id, email: user.email };
          const token = jwt.sign({ user: body }, process.env.JWT_SECRET, {
            expiresIn: '1h',
          });
          return res.status(200).json({ message: 'Signin successful', token });
        });
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
  })
  .post('newchat', (req, res) => {})
  .get('chatlist', (req, res) => {})
  .get('chat:id', (req, res) => {})
  .post('chat:id', (req, res) => {});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error('invalid username'));
  }
  socket.username = username;
  next();
});

io.on('connection', (socket) => {
  chatId = socket.id;
  console.log('We have a new connection', socket.id);
  console.log('We have a new connection', socket.username);

  const users = [];
  for (let [id, socket] of io.of('/').sockets) {
    users.push({
      userID: id,
      username: socket.username,
    });
  }
  socket.emit('users', users);

  // console.log('We have a new connection', socket);
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

connectToMongoDB();
server.listen(PORT, () => {
  console.log(
    `server is up and running \nVisit http://127.0.0.1:${PORT} \nwaiting for database to connect...`
  );
});
