const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('speak_experts', {
    id: {
  autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fullname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_title: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    launch_timeline: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    company_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'speak_experts',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
