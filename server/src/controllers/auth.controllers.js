import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import passport from 'passport';

dotenv.config();

/**
 * Authenticate user controller class - handles signin and signup
 */
class AuthUserController {
  /**
   * handles user signup
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods,
   * @param {Object} next - moves to the next middleware, handler or function
   */
  static async signup(req, res, next) {
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
      res.status(201).send('signup successful');
    })(req, res, next);
  }

  /**
   * handles user signin
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods,
   * @param {Object} next - moves to the next middleware, handler or function
   */
  static async signin(req, res, next) {
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
            expiresIn: '24h',
          });
          return res
            .status(200)
            .json({ message: 'Signin successful', token, userId: user._id });
        });
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
  }
}

export default AuthUserController;
