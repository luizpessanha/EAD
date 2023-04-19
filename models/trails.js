'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trails.belongsToMany(models.Groups, { through: 'GroupTrails', foreignKey: 'trailId' })
      Trails.hasMany(models.Courses)
    }
  }
  Trails.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Trails',
  });
  return Trails;
};