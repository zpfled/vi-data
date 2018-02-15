const db = require('../db/config');

const Play = db.define('play', {
	gameId: { type: Sequelize.NUMBER, allowNull: false },
	period: { type: Sequelize.NUMBER, allowNull: false },
	description: { type: Sequelize.TEXT, allowNull: false },
	clock: { type: Sequelize.STRING, allowNull: false },
	playerId: { type: Sequelize.NUMBER, allowNull: false },
	stat: { type: Sequelize.STRING, allowNull: false },
	awayScore: { type: Sequelize.STRING, allowNull: false },
	homeScore: { type: Sequelize.STRING, allowNull: false },
});

Play.sync();