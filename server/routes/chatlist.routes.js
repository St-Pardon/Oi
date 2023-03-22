import { Router } from 'express';
import ChatlistController from '../controllers/chatlist.controllers.js';

const ChatlistRoute = Router();

ChatlistRoute.get('/:id', ChatlistController.getUserChatlist);

export default ChatlistRoute;
