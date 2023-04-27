import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import AuthRoute from './auth.routes.js';
import UserRoute from './user.routes.js';
import ChatlistRoute from './chatlist.routes.js';
import ChatRequestRouter from './chat-request.routes.js';
import GroupRoute from './group.routes.js';
import passport from 'passport';
// import swaggerDocument from '../../swagger.json' assert { type: 'json' }

const v1 = '/api/v1/';
const indexRoute = Router();

indexRoute
  .use(`${v1}auth`, AuthRoute)
  .use(
    `${v1}user/`,
    passport.authenticate('jwt', { session: false }),
    UserRoute
  )
  .use(
    `${v1}chatlist/`,
    passport.authenticate('jwt', { session: false }),
    ChatlistRoute
  )
  .use(
    `${v1}request`,
    passport.authenticate('jwt', { session: false }),
    ChatRequestRouter
  )
  .use(
    `${v1}group`,
    passport.authenticate('jwt', { session: false }),
    GroupRoute
  )
  // .use(
  //   '/api-docs',
  //   swaggerUi.serve,
  //   swaggerUi.setup(swaggerDocument)
  // )
  .get('/', (req, res) => {
    res.status(200).end('Kindly refer to the API documentation to get started');
  });

export default indexRoute;
