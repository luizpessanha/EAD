const { Router } = require('express');
const GroupController = require('../controllers/GroupsController');

const router = Router();

router
  .post('/groups', GroupController.createGroup)
  .get('/groups/:id', GroupController.getOneGroup)
  .get('/groups', GroupController.getGroups)
  .put('/groups/:id', GroupController.updateGroup)
  .delete('/groups/:id', GroupController.destroyGroup);

module.exports = router;
