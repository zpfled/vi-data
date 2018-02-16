'use strict';
module.exports = (sequelize, DataTypes) => {
  var Play = sequelize.define('Play', {
    gameId: DataTypes.INTEGER,
    period: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    clock: DataTypes.STRING,
    playerId: DataTypes.INTEGER,
    stat: DataTypes.STRING,
    awayScore: DataTypes.NUMBER,
    homeScore: DataTypes.NUMBER
  }, {});
  Play.associate = function(models) {
    // associations can be defined here
  };
  return Play;
};