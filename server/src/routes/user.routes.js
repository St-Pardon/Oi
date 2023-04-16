import { Router } from 'express';
import UserController from '../controllers/user.controllers.js';

const UserRoute = Router();

UserRoute.get('/:id', UserController.getUserById)
  .get('/username/:name', UserController.getUserByName)
  .post('/more', UserController.addMoreInfo)
  .patch('/:user_id/edit', UserController.editUserInfo);

export default UserRoute;
