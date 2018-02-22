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
			},
			homeTeamId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
			},
			seasonId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
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