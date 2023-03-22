import { userModel } from '../models/user.models.js';

/**
 * User controller class
 */
class UserController {
  /**
   * Retrives all user from the database
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async getAllUser(req, res) {
    try {
      const users = await userModel.find();
      res.status(200).send(users);
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * retrieve a user by user id
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userModel.findOne({ _id: id });
      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  /**
   * retrieve a user by username or emailÍ
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async getUserByName(req, res) {
    try {
      const { name } = req.params;
      let user;
      if (name.includes('@')) {
        user = await userModel.findOne({ email: name });
      } else {
        user = await userModel.findOne({ username: name });
      }
      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}

export default UserController;
