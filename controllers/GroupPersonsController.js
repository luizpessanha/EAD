const database = require('../models');

class GroupPersonsController {
  static async createGroupPerson(req, res) {
    const infoGrouPerson = req.body;
    try {
      const newGroupPerson = await database.GroupPersons.create(infoGrouPerson);
      return res.status(201).json({ newGroupPerson });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = GroupPersonsController;
