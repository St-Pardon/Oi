import { userModel } from '../models/user.models.js';
import { moreInfoModel } from '../models/moreInfo.model.js';

/**
 * Request Controller Class
 */
class RequestController {
  /**
   * handles sending, request and acceptance of chat request from the database
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async sendChatRequest(req, res) {
    const { user_id } = req.params;
    const { request_id } = req.body;
    if (!user_id || !request_id) {
      res.status(400).json({ error: 'Bad request' });
      return;
    }

    moreInfoModel
      .updateMany(
        { user_id: { $in: [user_id, request_id] } },
        {
          $push: { request: { request_id, sender_id: user_id } },
        },
        { multi: true, new: true }
      )
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }

  /**
   * retrieves all chat request
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async getChatRequest(req, res) {
    const { user_id } = req.params;

    if (!user_id) {
      res.status(400).json({ error: 'Bad request' });
      return;
    }

    const user = await moreInfoModel.findOne({ user_id });

    if (!user) res.status(404).end('More user not found');

    let chatRequest = user.request.map(async (item) => {
      const res = await userModel.findOne({ _id: item.request_id });
      return {
        id: res._id,
        request_id: item.request_id,
        sender_id: item.sender_id,
        display_name: res.display_name,
        display_picture: user.display_picture,
        fullname: `${res.first_name} ${res.last_name}`,
        username: res.username,
        date: item.time,
        status: item.status,
      };
    });
    Promise.all(chatRequest)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  }

  /**
   * change the status of the chat request by accepting, rejecting or cancelling
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async changeStatus(req, res) {
    const { user_id } = req.params;
    const { request_id, status } = req.query;

    console.log(request_id);
    if (!user_id || !request_id || !status) {
      res.status(400).json({ error: 'Bad request' });
      return;
    }

    if (status === 'confirm') {
      try {
        await moreInfoModel.updateMany(
          {
            user_id: { $in: [user_id, request_id] },
            request: { $elemMatch: { request_id: request_id } },
          },
          {
            $pull: {
              request: { request_id },
            },
          }
        );
        await userModel.findByIdAndUpdate(
          { _id: user_id },
          { $push: { chatlist: request_id } },
          { new: true }
        );
        await userModel.findByIdAndUpdate(
          { _id: request_id },
          { $push: { chatlist: user_id } },
          { new: true }
        );

        res.status(200).send('completed');
      } catch (err) {
        res.status(400).send('err');
      }
      return;
    }

    if (status === 'reject') {
      try {
        await moreInfoModel.updateMany(
          {
            user_id: { $in: [user_id, request_id] },
            request: { $elemMatch: { request_id: request_id } },
          },
          {
            $pull: {
              request: { request_id },
            },
          }
        );

        res.status(200).send('completed');
      } catch (err) {
        res.status(400).send(err);
      }
      return;
    }

    if (status === 'cancel') {
      moreInfoModel
        .updateMany(
          {
            user_id: { $in: [user_id, request_id] },
            request: { $elemMatch: { request_id: request_id } },
          },
          {
            $pull: {
              request: { request_id },
              // request: { $elemMatch: { request_id: request_id } },
            },
          }
        )
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
      return;
    }
    res.status(400).json({ error: 'Invalid request' });
  }
}

export default RequestController;
