'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Plays', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			gameId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			period: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			description: {
				type: Sequelize.TEXT
			},
			clock: {
				type: Sequelize.STRING,
				allowNull: false
			},
			playerId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			stat: {
				type: Sequelize.STRING,
				allowNull: false
			},
			awayScore: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			homeScore: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Plays');
	}
};