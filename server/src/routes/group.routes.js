import { Router } from 'express';
import GroupController from '../controllers/group.controllers.js';

const GroupRoute = Router();

GroupRoute.get('/all', GroupController.getAllGroups)
  .post('/create', GroupController.createGroup)
  .get('/:group_id', GroupController.getGroupById)
  .put('/:group_id/add_member', GroupController.addMember)
  .patch('/:group_id/update', GroupController.editGroupInfo)
  .get('/:user_id/groups', GroupController.getGroupsByUser)
  .patch('/:group_id/admin', GroupController.makeOrUnmakeAdmin)
  .delete('/:user_id/exit', GroupController.exitGroup)
  .delete('/:user_id/remove', GroupController.removeMember)
  .delete('/:group_id', GroupController.deleteGroup);

export default GroupRoute;
