'use strict';
module.exports = (sequelize, DataTypes) => {
	const Season = sequelize.define('Season', {
		start: DataTypes.DATE,
		end: DataTypes.DATE
	}, {});

	Season.associate = function (models) {
		Season.hasMany(models.Game);
	};

	return Season;
};