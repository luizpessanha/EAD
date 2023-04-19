'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Groups.belongsToMany(models.Persons, { through: 'GroupPersons'} )
      Groups.belongsToMany(models.Trails, { through: 'GroupTrails', foreignKey: 'groupId'} )
    }
  }
  Groups.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Groups',
  });
  return Groups;
};