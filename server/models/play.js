'use strict';
module.exports = (sequelize, DataTypes) => {
	const Play = sequelize.define('Play', {
		period: DataTypes.INTEGER,
		description: DataTypes.TEXT,
		clock: DataTypes.STRING,
		stat: DataTypes.STRING,
		awayScore: DataTypes.INTEGER,
		homeScore: DataTypes.INTEGER
	}, {});

	// associations can be defined here
	Play.associate = function (models) {
		Play.belongsTo(models.Game);
		Play.belongsTo(models.Player);
	};

	return Play;
};