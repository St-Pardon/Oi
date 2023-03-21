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
import { chatModel } from './models/chat.model.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = new express();
const server = http.createServer(app);
const io = new Socket(server, {cors: {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["*"],
  credentials: true
}});
const ChatSession = [];
const chatlist = {
  john: ['testbot', 'pardonne'],
  mike: ['pardonne', 'john'],
  pardonne: ['testbot', 'mike'],
  testbot: ['john', 'pardonne'],
};

app
  .use(cors())
  .use(express.json())
  .use(express.static('public'))
  .use(express.urlencoded({ extended: false }))
  .get('/', (req, res) => {
    res.status(200).end('Kindly signin or signup');
  })
  .post('/signup', async (req, res, next) => {
    passport.authenticate('signup', async (err, user) => {
      if (err) {
        console.log(err);
        res.status(403).send(err);
      }
      if (!user) {
        const error = new Error('Username or password is incorrect');
        console.log(error);
        res.status(403).send('User already exist');
      }
      res.static(200).send('sign successful');
    })(req, res, next);
    // console.log("after middleware")
    // res.status(201).json({
    //   message: 'Signup successful',
    //   user: req.user,
    // });
  })
  // .post('/signin', (req, res) => {
  //   const { username } = req.body;
  //   res.status(200).send(username);
  //   // console.log(username)
  // })
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
          return res
            .status(200)
            .json({ message: 'Signin successful', token, userId: user._id });
        });
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
  })
  // .post('newchat', (req, res) => {})
  .get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findOne({ _id: id });
    res.status(200).send(user);
    // res.status(200).send(chatlist[id]) 
  })
  .get('/username/:name', async (req, res) => {
    const { name } = req.params;
    let user;
    if (name.includes('@')){
      user = await userModel.findOne({ email: name });
    } else{
      user = await userModel.findOne({ username: name });
    }
    res.status(200).send(user);
    // res.status(200).send(chatlist[id])
  })
  .post('/add_chat', (req, res) => {
    const { friendId, userId } = req.body;
    userModel
      .findByIdAndUpdate(
        { _id: userId },
        { $push: { chatlist: friendId } },
        { new: true }
      )
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  })
  .get('/chatlist/:id', async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findOne({ _id: id });
    let chatlist = user.chatlist.map(async (item) => {
      const res = await userModel.findOne({ _id: item });
      return {
        id: res._id,
        display_name: res.display_name,
        fullname: `${res.first_name} ${res.last_name}`,
      };
    }); 
    Promise.all(chatlist)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
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
// .get('chat:id', (req, res) => {})
// .post('chat:id', (req, res) => {});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  console.log(username)
  if (!username) {
    return next(new Error('invalid username'));
  }
  socket.username = username;
  next();
});

io.on('connection', (socket) => {
  // ChatSession.push({chatId: socket.id});
  ChatSession.push({chatId: socket.id, username: socket.username});
  console.log('We have a new connection', socket.id);
  console.log(ChatSession)
  socket.emit("message", {chat:"hello everyone", to: socket.username, from: 'admin'})
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
  socket.on('chat', ({to, from, chat}) => {
    let reciver = ChatSession.find(user => user.username === to)
    console.log("to", to, "from",from, 'chat',chat)
    io.to(reciver.chatId).to(socket.id).emit('message', {to, from, chat})
    // io.to(to).to(socket.id).emit('message', chat)
    // io.emit('message', chat)
    // if (data.socketid) {
    //   io.to(data.socketid).to(socket.id).emit('chat', data);
    // } else {
    //   io.sockets.emit('chat', data);
    // }
  });

  socket.on('disconnect', () => {
    ChatSession.splice(ChatSession.findIndex((user) => user.chatId === socket.id));
    console.log('User left');
  });
});

connectToMongoDB();
server.listen(PORT, () => {
  console.log(
    `server is up and running \nVisit http://127.0.0.1:${PORT} \nwaiting for database to connect...`
  );
});
