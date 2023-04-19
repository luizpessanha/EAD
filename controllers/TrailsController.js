const database = require('../models');

class TrailsController {
  static async createTrail(req, res) {
    const infoTrail = req.body;
    try {
      if (Object.keys(infoTrail).length === 0) {
        throw new Error('Corpo de requisição vazio');
      }
      const newTrail = await database.Trails.create(infoTrail);
      return res.status(201).json(newTrail);
    } catch (error) {
      if (error.message === 'Corpo de requisição vazio') {
        return res.status(400).json(error.message);
      }
      return res.status(500).json(error.message);
    }
  }

  static async getOneTrail(req, res) {
    const { id } = req.params;

    try {
      const oneTrail = await database.Trails.findOne({ where: { id: Number(id) } });
      return res.status(200).json(oneTrail);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateTrail(req, res) {
    const { id } = req.params;
    const newInfo = req.body;

    try {
      if (Object.keys(newInfo).length === 0) {
        throw new Error('Corpo de requisição vazio');
      }
      await database.Trails.update(newInfo, { where: { id } });
      const updatedTrail = await database.Trails.findOne({ where: { id } });
      return res.status(204).json(updatedTrail);
    } catch (error) {
      if (error.message === 'Corpo da requisição vazio') {
        return res.status(400).json(error.message);
      }
      return res.status(500).json(error.message);
    }
  }

  static async destroyTrails(req, res) {
    const { id } = req.params;

    try {
      await database.Trails.destroy({ where: { id } });
      return res.status(200).json('Excluído com sucesso!');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getTrails(req, res) {
    try {
      const listTrails = await database.Trails.findAll();
      return res.status(200).json(listTrails);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TrailsController;
