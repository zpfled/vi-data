'use strict';
module.exports = (sequelize, DataTypes) => {
	const Season = sequelize.define('season', {
		start: DataTypes.DATE,
		end: DataTypes.DATE
	}, {});

	Season.associate = function (models) {
		Season.hasMany(models.Game, { as: 'Games' });
	};

	return Season;
};