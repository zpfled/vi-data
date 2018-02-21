'use strict';
module.exports = (sequelize, DataTypes) => {
	const Lineup = sequelize.define('Lineup', {
		starting: DataTypes.BOOLEAN
	}, {});

	//associations
	Lineup.associate = function (models) {
		Lineup.belongsToMany(models.Player, { through: 'LineupPlayer' });
	};

	return Lineup;
};