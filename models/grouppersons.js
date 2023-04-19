'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupPersons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupPersons.init({
    GroupId: DataTypes.INTEGER,
    PersonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GroupPersons',
  });
  return GroupPersons;
};