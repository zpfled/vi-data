'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Players', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			firstName: {
				type: Sequelize.STRING,
				allowNull: false
			},
			lastName: {
				type: Sequelize.STRING,
				allowNull: false
			},
			teamId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				// references: {
				// 	model: 'Teams',
				// 	key: 'id',
				// 	as: 'teamId',
				// },
			},
			height: {
				type: Sequelize.STRING
			},
			position: {
				type: Sequelize.STRING
			},
			highSchool: {
				type: Sequelize.STRING
			},
			city: {
				type: Sequelize.STRING
			},
			state: {
				type: Sequelize.STRING
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
		return queryInterface.dropTable('Players');
	}
};