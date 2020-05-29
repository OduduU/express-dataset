'use strict';
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    event_type: DataTypes.STRING,
    actorId: DataTypes.INTEGER,
    repoId: DataTypes.INTEGER,
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.hasOne(models.Actor, {
      foreignKey: 'id',
      as: 'actor'
    });
    Event.hasOne(models.Repo, {
      foreignKey: 'id',
      as: 'repo'
    });
  };
  return Event;
};