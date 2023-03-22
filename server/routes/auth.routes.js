import { Router } from 'express';
import AuthUserController from '../controllers/auth.controllers.js';

const AuthRoute = Router();

AuthRoute.post('/signup', AuthUserController.signup).post(
  '/signin',
  AuthUserController.signin
);

export default AuthRoute;
