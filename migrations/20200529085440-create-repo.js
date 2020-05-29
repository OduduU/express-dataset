"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("repos", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			url: Sequelize.STRING,
			name: {
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
		return queryInterface.dropTable("repos");
	},
};
