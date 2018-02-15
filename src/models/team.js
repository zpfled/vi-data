const db = require('../db/config');

const Team = db.define('team', {
	name: { type: Sequelize.STRING, allowNull: false },
	school: { type: Sequelize.STRING, allowNull: false },
});

Team.sync().then(() => {

	// Seed with Illini
	return Team.create({
		name: 'Fighting Illini',
		school: 'Illinois'
	});
});