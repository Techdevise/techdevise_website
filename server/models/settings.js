const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    facebook_link: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: ""
    },
    instagram_link: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: ""
    },
    linkedin_link: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: ""
    },
    twitter_link: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'settings',
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
