const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hire_roles', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    It_role_id: {
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
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    just_confirm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=>Employer,1=>Looking for a job"
    },
    company_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    job_title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    type_of_hire: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    number_of_job: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    help: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'hire_roles',
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
