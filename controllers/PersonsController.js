const database = require('../models');

class PersonsController {
  static async getPersons(req, res) {
    try {
      const allPersons = await database.Persons.findAll();
      return res.status(200).json(allPersons);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOnePerson(req, res) {
    const { id } = req.params;
    try {
      const onePerson = await database.Persons.findOne({ where: { id } });
      return res.status(200).json(onePerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPerson(req, res) {
    const person = req.body;
    try {
      if (Object.keys(person).length === 0) {
        throw new Error('Corpo da requisição vazio');
      }
      const newPerson = await database.Persons.create(person);
      return res.status(201).json(newPerson);
    } catch (error) {
      if (error.message === 'Corpo da requisição vazio') {
        return res.status(400).json(error.message);
      }
      return res.status(500).json(error.message);
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      if (Object.keys(newData) === 0) {
        throw new Error('Corpo da requisição vazio');
      }

      await database.Persons.update(newData, { where: { id } });
      const updatePerson = await database.Persons.findOne({ where: { id } });
      return res.status(204).json(updatePerson);
    } catch (error) {
      if (error.message === 'Corpo da requisição vazio') {
        return res.status(400).json(error.message);
      }
      return res.status(500).json(error.message);
    }
  }

  static async destroyPerson(req, res) {
    const { id } = req.params;

    try {
      await database.Persons.destroy({ where: { id: Number(id) } });
      return res.status(200).json(`${id} excluido com sucesso`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async addPersonInGroup(req, res) {
    const { personId } = req.params;
    const { groupId } = req.params;
    const newAddPersonInGroup = { PersonId: personId, GroupId: groupId };
    try {
      if (Object.keys(req.params).length === 0) {
        throw new Error('Corpo da requisição vazio');
      }
      const newAddPersonInGroupCreator = await database.GroupPersons.create(newAddPersonInGroup);
      return res.status(201).json(newAddPersonInGroupCreator);
    } catch (error) {
      if (error.message === 'Corpo da requisição vazio') {
        return res.status(400).json(error.message);
      }
      return res.status(500).json(error.message);
    }
  }

  static async allPersonInGroup(req, res) {
    try {
      const allPersonInGroup = await database.GroupPersons.findAll();
      return res.status(200).json(allPersonInGroup);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async destroyPersonInGroup(req, res) {
    const { groupId } = req.params;

    try {
      await database.GroupPersons.destroy({ where: { id: Number(groupId) } });
      return res.status(200).json(`${groupId} excluido com sucesso`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PersonsController;
