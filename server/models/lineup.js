'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lineup = sequelize.define('Lineup', {
    starting: DataTypes.BOOLEAN
  }, {});
  Lineup.associate = function(models) {
    // associations can be defined here
  };
  return Lineup;
};