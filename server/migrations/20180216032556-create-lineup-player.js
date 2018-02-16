'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('LineupPlayers', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			lineupId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Lineups',
					key: 'id',
					as: 'lineupId',
				},
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
			starter: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
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
		return queryInterface.dropTable('LineupPlayers');
	}
};