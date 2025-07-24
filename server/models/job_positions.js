const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('job_positions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jobOption_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    last_name: {
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
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    country_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    message: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1=>About,2=>Career	"

    },
    linkedin_profile: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    about_us: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    pdf_file: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    located: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1=>yes,0=>no	"

    },
    questions_employe: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  }, {
    sequelize,
    tableName: 'job_positions',
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
