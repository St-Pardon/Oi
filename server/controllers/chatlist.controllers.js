import { userModel } from '../models/user.models.js';

/**
 * Chatlist Controller Class
 */
class ChatlistController {
  static async getUserChatlist(req, res) {
    /**
     * Retrives a user chatlist from the database
     * @param {Object} req - contains the req methods,
     * @param {Object} res - contains the res methods
     */
    const { id } = req.params;
    const user = await userModel.findOne({ _id: id });
    let chatlist = user.chatlist.map(async (item) => {
      const res = await userModel.findOne({ _id: item });
      return {
        id: res._id,
        display_name: res.display_name,
        fullname: `${res.first_name} ${res.last_name}`,
      };
    });
    Promise.all(chatlist)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  }
}

export default ChatlistController;
