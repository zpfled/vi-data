'use strict';
module.exports = (sequelize, DataTypes) => {
  var Game = sequelize.define('Game', {
    awayTeamId: DataTypes.INTEGER,
    homeTeamId: DataTypes.INTEGER,
    seasonId: DataTypes.INTEGER,
    neutral: DataTypes.BOOLEAN,
    postSeason: DataTypes.BOOLEAN
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};