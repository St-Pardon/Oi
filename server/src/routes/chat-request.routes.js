import { Router } from 'express';
import RequestController from '../controllers/request.controllers.js';

const ChatRequestRouter = Router();

ChatRequestRouter.put('/:user_id', RequestController.sendChatRequest)
  .get('/:user_id', RequestController.getChatRequest)
  .patch('/:user_id', RequestController.changeStatus);

export default ChatRequestRouter;
