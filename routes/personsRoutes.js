const { Router } = require('express');
const PersonsController = require('../controllers/PersonsController');

const router = Router();

router
  .get('/persons', PersonsController.getPersons)
  .get('/persons/:id', PersonsController.getOnePerson)
  .put('/persons/:id', PersonsController.updatePerson)
  .delete('/persons/:id', PersonsController.destroyPerson)
  .post('/persons', PersonsController.createPerson)
  .post('/persons/:personId/group/:groupId', PersonsController.addPersonInGroup)
  .get('/groups', PersonsController.allPersonInGroup)
  .delete('/groups/:groupId', PersonsController.destroyPersonInGroup);

module.exports = router;
