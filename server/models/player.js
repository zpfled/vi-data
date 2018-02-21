'use strict';
module.exports = (sequelize, DataTypes) => {
	const Player = sequelize.define('Player', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		height: DataTypes.STRING,
		position: DataTypes.STRING,
		highSchool: DataTypes.STRING,
		city: DataTypes.STRING,
		state: DataTypes.STRING
	}, {});

	// associations can be defined here
	Player.associate = function (models) {
		Player.belongsToMany(models.Lineup, { through: 'LineupPlayer' });
		Player.belongsTo(models.Team);
	};

	return Player;
};
