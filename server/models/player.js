'use strict';
module.exports = (sequelize, DataTypes) => {
  var Player = sequelize.define('Player', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
    height: DataTypes.STRING,
    position: DataTypes.STRING,
    highSchool: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};