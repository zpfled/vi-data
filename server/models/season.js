'use strict';
module.exports = (sequelize, DataTypes) => {
  var Season = sequelize.define('Season', {
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {});
  Season.associate = function(models) {
    // associations can be defined here
  };
  return Season;
};