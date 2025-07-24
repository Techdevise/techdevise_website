const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_options', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
     sub_job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    responsibilities: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    requirements: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    experience: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: ""
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'job_options',
    timestamps: true,
    paranoid: true,
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
