import { Router } from 'express';
import AuthRoute from './auth.routes.js';
import UserRoute from './user.routes.js';
import ChatlistRoute from './chatlist.routes.js';
import ChatRequestRouter from './chat-request.routes.js';
import GroupRoute from './group.routes.js';

const v1 = '/api/v1/';
const indexRoute = Router();

indexRoute
  .use(`${v1}auth`, AuthRoute)
  .use(`${v1}user/`, UserRoute)
  .use(`${v1}chatlist/`, ChatlistRoute)
  .use(`${v1}request`, ChatRequestRouter)
  .use(`${v1}group`, GroupRoute)
  .get('/', (req, res) => {
    res.status(200).end('Kindly refer to the API documentation to get started');
  });

export default indexRoute;
