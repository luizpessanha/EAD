const database = require('../models');

class GroupsController {
  static async createGroup(req, res) {
    const newData = req.body;

    try {
      if (Object.keys(newData) === 0) {
        throw new Error('Corpo de requisição vazio');
      }

      const newGroup = await database.Groups.create(newData);
      return res.status(201).json(newGroup);
    } catch (error) {
      if (error.message === 'Corpo de requisição vazio') {
        return res.status(400).json(error.message);
      }

      return res.status(500).json(error.message);
    }
  }

  static async getOneGroup(req, res) {
    const { id } = req.params;

    try {
      const oneGroup = await database.Groups.findOne({ where: { id } });
      return res.status(200).json(oneGroup);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getGroups(req, res) {
    try {
      const allGroups = await database.Groups.findAll();
      return res.status(200).json(allGroups);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateGroup(req, res) {
    const { id } = req.params;
    const newData = req.body;

    try {
      if (Object.keys(newData) === 0) {
        throw new Error('Corpo da requisição vazio');
      }

      await database.Groups.update(newData, { where: { id } });
      const updateGroup = database.Groups.findOne({ where: { id } });
      return res.status(204).json(updateGroup);
    } catch (error) {
      if (error.message === 'Corpo da requisição vazio') {
        return res.status(400).json(error.message);
      }
      return res.status(500).json(error.message);
    }
  }

  static async destroyGroup(req, res) {
    const { id } = req.params;

    try {
      await database.Groups.destroy({ where: { id } });
      return res.status(200).json(`${id} excluido com sucesso!`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = GroupsController;
