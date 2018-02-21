'use strict';
module.exports = (sequelize, DataTypes) => {
	const Team = sequelize.define('Team', {
		name: DataTypes.STRING,
		school: DataTypes.STRING
	}, {});

	// associations
	Team.associate = function (models) {
		Team.hasMany(models.Player);
		Team.hasMany(models.Game, { as: 'homeTeam', foreignKey: 'homeTeamId' });
		Team.hasMany(models.Game, { as: 'awayTeam', foreignKey: 'awayTeamId' });
	};

	return Team;
};