'use strict';
module.exports = (sequelize, DataTypes) => {
	const Game = sequelize.define('Game', {
		conference: DataTypes.BOOLEAN,
		date: DataTypes.DATE,
		neutral: DataTypes.BOOLEAN,
		postSeason: DataTypes.BOOLEAN,
		time: DataTypes.TIME,
	}, {});

	//associations
	Game.associate = function (models) {
		Game.belongsTo(models.Team, { as: 'awayTeam' });
		Game.belongsTo(models.Team, { as: 'homeTeam' });
		Game.belongsTo(models.Season);
	};

	return Game;
};