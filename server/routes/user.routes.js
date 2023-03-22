import { Router } from 'express';
import UserController from '../controllers/user.controllers.js';

const UserRoute = Router();

UserRoute.get('/:id', UserController.getUserById).get(
  '/username/:name',
  UserController.getUserByName
);

export default UserRoute;
