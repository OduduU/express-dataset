"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("events", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			createdAt: {
				type: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
			event_type: Sequelize.STRING,
			//foreign key usage
			actorId: {
				type: Sequelize.INTEGER,
				references: {
					model: "actors",
					key: "id",
				},
			},
			repoId: {
				type: Sequelize.INTEGER,
				references: {
					model: "repos",
					key: "id",
				},
			},
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("events");
	},
};
