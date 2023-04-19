const bodyParser = require('body-parser');
const persons = require('./personsRoutes');
const groups = require('./groupsRouters');
const groupPersons = require('./groupPersonsRouters');
const trail = require('./trailsRouters');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.get('/', (req, res) => res.send('Olá!'));
  app.use(
    persons,
    groups,
    groupPersons,
    trail,
  );
};
