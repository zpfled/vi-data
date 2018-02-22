'use strict';
module.exports = (sequelize, DataTypes) => {
	const Lineup = sequelize.define('lineup', {
		starting: DataTypes.BOOLEAN
	}, {});

	//associations
	Lineup.associate = function (models) {
		Lineup.belongsToMany(models.Player, { through: 'lineupPlayer' });
	};

	return Lineup;
};