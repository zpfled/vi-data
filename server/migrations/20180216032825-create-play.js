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
				references: {
					model: 'Games',
					key: 'id',
					as: 'gameId',
				},
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
				references: {
					model: 'Players',
					key: 'id',
					as: 'playerId',
				},
			},
			stat: {
				type: Sequelize.STRING,
				allowNull: false
			},
			awayScore: {
				type: Sequelize.NUMBER,
				allowNull: false
			},
			homeScore: {
				type: Sequelize.NUMBER,
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