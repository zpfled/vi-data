const db = require('../db/config');

const LineupPlayer = db.define('lineup_player', {
	lineupId: { type: Sequelize.NUMBER, allowNull: false },
	playerId: { type: Sequelize.NUMBER, allowNull: false },
});

LineupPlayer.sync();