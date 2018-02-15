const db = require('../db/config');

const Player = db.define('player', {
	firstName: { type: Sequelize.STRING, allowNull: false },
	lastName: { type: Sequelize.STRING, allowNull: false },
	teamId: { type: Sequelize.NUMBER, allowNull: false },
	height: { type: Sequelize.STRING },
	position: { type: Sequelize.STRING },
	highSchool: { type: Sequelize.STRING },
	city: { type: Sequelize.STRING },
	state: { type: Sequelize.STRING },
});

Player.sync();