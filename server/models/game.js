'use strict';
module.exports = (sequelize, DataTypes) => {
	const Game = sequelize.define('game', {
		conference: DataTypes.BOOLEAN,
		date: DataTypes.DATE,
		neutral: DataTypes.BOOLEAN,
		postSeason: DataTypes.BOOLEAN,
		time: DataTypes.TIME,
	}, {});

	//associations
	Game.associate = function (models) {
		Game.belongsTo(models.Team, { as: 'awayTeam', foreignKey: 'awayTeamId' });
		Game.belongsTo(models.Team, { as: 'homeTeam', foreignKey: 'homeTeamId' });
		Game.belongsTo(models.Season, { as: 'season', foreignKey: 'seasonId' });
	};

	return Game;
};