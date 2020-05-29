'use strict';
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Repo = sequelize.define('Repo', {
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Repo.associate = function(models) {
    // associations can be defined here
  };
  return Repo;
};