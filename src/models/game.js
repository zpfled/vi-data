const db = require('../db/config');

const Game = db.define('game', {
	awayTeamId: { type: Sequelize.NUMBER, allowNull: false },
	homeTeamId: { type: Sequelize.NUMBER, allowNull: false },
	seasonId: { type: Sequelize.NUMBER, allowNull: false },
	neutral: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
	postSeason: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
});

Game.sync();