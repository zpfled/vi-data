const db = require('../db/config');

const Season = db.define('team', {
	start: { type: Sequelize.DATE, allowNull: false },
	end: { type: Sequelize.DATE, allowNull: false },
});

Season.sync().then(() => {

	// Seed with 2017-18 season
	return Season.create({
		start: new Date('11/01/2017'),
		end: new Date('04/30/2018')
	});
});