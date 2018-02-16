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
				allowNull: false
			},
			homeTeamId: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			seasonId: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			neutral: {
				type: Sequelize.BOOLEAN
			},
			postSeason: {
				type: Sequelize.BOOLEAN
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