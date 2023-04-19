const { Router } = require('express');
const TrailsController = require('../controllers/TrailsController');

const router = Router();

router
  .post('/trails', TrailsController.createTrail)
  .get('/trails/:id', TrailsController.getOneTrail)
  .get('/trails', TrailsController.getTrails)
  .put('/trails/:id', TrailsController.updateTrail)
  .delete('/trails/:id', TrailsController.destroyTrails);

module.exports = router;
