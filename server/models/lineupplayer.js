'use strict';
module.exports = (sequelize, DataTypes) => {
  var LineupPlayer = sequelize.define('LineupPlayer', {
    lineupId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    starter: DataTypes.BOOLEAN
  }, {});
  LineupPlayer.associate = function(models) {
    // associations can be defined here
  };
  return LineupPlayer;
};