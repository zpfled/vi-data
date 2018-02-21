'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Games', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			awayTeamId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
				// references: {
				// 	model: 'Teams',
				// 	key: 'id',
				// 	as: 'awayTeamId',
				// },
			},
			homeTeamId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
				// references: {
				// 	model: 'Teams',
				// 	key: 'id',
				// 	as: 'homeTeamId',
				// },
			},
			seasonId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
				// references: {
				// 	model: 'Seasons',
				// 	key: 'id',
				// 	as: 'seasonId',
				// },
			},
			conference: {
				type: Sequelize.BOOLEAN
			},
			date: {
				type: Sequelize.DATE
			},
			neutral: {
				type: Sequelize.BOOLEAN
			},
			postSeason: {
				type: Sequelize.BOOLEAN
			},
			time: {
				type: Sequelize.TIME
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
		return queryInterface.dropTable('Games');
	}
};