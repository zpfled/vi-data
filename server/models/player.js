'use strict';
module.exports = (sequelize, DataTypes) => {
	const Player = sequelize.define('player', {
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
		Player.belongsTo(models.Team);
	};

	return Player;
};
