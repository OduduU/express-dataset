"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("actors", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			avatar_url: Sequelize.STRING,
			login: {
				type: Sequelize.STRING,
				defaultValue: false,
				allowNull: false,
				unique: true,
			},
			createdAt: {
				type: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("actors");
	},
};
