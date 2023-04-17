import { groupModel } from '../models/group.model.js';

class GroupController {
  /**
   * Retrieves all the groups in the database and send as a responses
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async getAllGroups(req, res) {
    try {
      await groupModel.find().then((data) => {
        res.status(200).json(data);
      });
    } catch (error) {
      res.status(400).json({ err: `An error occured ${error}` });
    }
  }

  /**
   * retrives a group by it's id
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async getGroupById(req, res) {
    try {
      const { group_id: _id } = req.params;

      if (!_id || _id === undefined) {
        res.status(400).json({ err: 'Invalid request' });
        return;
      }

      const group = await groupModel.findOne({ _id });

      if (!group) {
        res.status(404).json({ err: 'Group not found' });
        return;
      }

      res.status(200).send(group);
    } catch (error) {
      res.status(400).json({ err: `An error occured ${error}` });
    }
  }

  /**
   * Create a group and add a member
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async createGroup(req, res) {
    try {
      const body = req.body;

      if (!body) {
        res.status(400).json({ err: 'Invalid request' });
        return;
      }

      const group = await groupModel.create(body);

      if (!group) {
        res.status(404).json({ err: 'Group not found' });
        return;
      }

      res.status(201).send(group);
    } catch (error) {
      res.status(400).json({ err: `An error occured ${error}` });
    }
  }

  /**
   * Add menbers to the group, single or multiple
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async addMember(req, res) {
    try {
      const { members } = req.body;
      const { group_id: _id } = req.params;

      if (!members || !_id || _id === undefined) {
        res.status(400).json({ err: 'Invalid request' });
        return;
      }

      const member = members.map((item) => {
        return { member_id: item };
      });

      const data = await groupModel.updateOne(
        { _id },
        {
          $push: { members: member },
        },
        { multi: true, new: true }
      );

      res.status(201).send(data);
    } catch (error) {
      res.status(400).json({ err: `An error occured ${error}` });
    }
  }

  /**
   * Update group information like display_picture, info, name
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async editGroupInfo(req, res) {
    try {
      const body = req.body;
      const { group_id: _id } = req.params;

      if (!body || !_id || _id === undefined) {
        res.status(400).json({ err: 'Invalid request' });
        return;
      }

      await groupModel
        .updateOne({ _id }, body, { new: true })
        .then((data) => res.status(200).send({ status: 'completed' }))
        .catch((err) =>
          res.status(400).json({ err: `An Error Ocurred ${err}` })
        );
    } catch (error) {
      res.status(400).json({ err: `An error occured ${error}` });
    }
  }

  /**
   * Get all the group a user beliongs to
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async getGroupsByUser(req, res) {
    try {
      const { user_id } = req.params;

      if (!user_id || user_id === undefined) {
        res.status(400).json({ err: 'Invalid request' });
        return;
      }

      const group = await groupModel.find([user_id]);

      if (!group) {
        res.status(404).json({ err: 'Group not found' });
        return;
      }

      res.status(200).send(group);
    } catch (error) {
      res.status(400).json({ err: `An error occured ${error}` });
    }
  }

  /**
   * make user an admin or remove admin role from user
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async makeOrUnmakeAdmin(req, res) {
    try {
      const { user_id, role } = req.query;
      const { group_id: _id } = req.params;
    } catch (error) {
      res.status(400).json({ err: `An error occured ${error}` });
    }
  }

  /**
   * a user can exit the group if they wish
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methodss
   */
  static async exitGroup(req, res) {
    try {
    } catch (error) {
      res.status(400).json({ err: `An error occured ${error}` });
    }
  }

  /**
   * Admin can remove member of a group
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async removeMember(req, res) {
    try {
    } catch (error) {
      res.status(400).json({ err: `An error occured ${error}` });
    }
  }

  /**
   * Deletes enterie group and it's data
   * @param {Object} req - contains the req methods,
   * @param {Object} res - contains the res methods
   */
  static async deleteGroup(req, res) {
    try {
      const { group_id: _id } = req.params;

      if (!_id || _id === undefined) {
        res.status(400).json({ err: 'Invalid request' });
        return;
      }

      await groupModel
        .deleteOne({ _id })
        .then((data) => res.status(200).send(data));
    } catch (error) {
      res.status(400).json({ err: `An error occured ${error}` });
    }
  }
}

export default GroupController;
