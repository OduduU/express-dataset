'use strict';
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    login: DataTypes.STRING,
    avatar_url: DataTypes.STRING,
  }, {});
  Actor.associate = function(models) {
    // associations can be defined here
  };
  return Actor;
};