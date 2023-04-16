import { Router } from 'express';
import AuthRoute from './auth.routes.js';
import UserRoute from './user.routes.js';
import ChatlistRoute from './chatlist.routes.js';
import ChatRequestRouter from './chat-request.routes.js';

const v1 = '/api/v1/';
const indexRoute = Router();

indexRoute
  .use(`${v1}auth`, AuthRoute)
  .use(`${v1}user/`, UserRoute)
  .use(`${v1}chatlist/`, ChatlistRoute)
  .use(`${v1}request`, ChatRequestRouter)
  .get('/', (req, res) => {
    res.status(200).end('Kindly refer to the API documentation to et started');
  });

export default indexRoute;
