var DataTypes = require("sequelize").DataTypes;
var _techdevise_team = require("./techdevise_team");

function initModels(sequelize) {
  var techdevise_team = _techdevise_team(sequelize, DataTypes);


  return {
    techdevise_team,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
