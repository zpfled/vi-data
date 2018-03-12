'use strict';
module.exports = (sequelize, DataTypes) => {
	const Team = sequelize.define('team', {
		name: DataTypes.STRING,
		school: DataTypes.STRING
	}, {});

	// associations
	Team.associate = function (models) {
		Team.hasMany(models.Player);
		Team.hasMany(models.Game, { as: 'HomeGames', foreignKey: 'homeTeamId' });
		Team.hasMany(models.Game, { as: 'AwayGames', foreignKey: 'awayTeamId' });
	};

	return Team;
};