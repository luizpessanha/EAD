const { Router } = require('express');
const GroupPersonsController = require('../controllers/GroupPersonsController');

const router = Router();

router
  .post('/groupPersons', GroupPersonsController.createGroupPerson);

module.exports = router;
