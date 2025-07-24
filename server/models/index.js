'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// sequelize.sync({ force: false, alter: true })
//   .then(() => console.log('Models synchronized successfully.'))
//   .catch(err => console.error('Model synchronization error:', err));
db.sequelize = sequelize;
db.Sequelize = Sequelize;

 db.User = require("./user")(sequelize,Sequelize)
 db.Cms = require("./cms")(sequelize,Sequelize)
 db.JobPosition = require("./job_positions")(sequelize,Sequelize)
 db.JobTitle = require("./job_title")(sequelize,Sequelize)
 db.JobSubTitle = require("./job_subtitle")(sequelize,Sequelize)
 db.JobOption = require("./job_options")(sequelize,Sequelize)
 db.ContactUs = require("./contact_us")(sequelize,Sequelize)
 db.SpeakExperts = require("./speak_experts")(sequelize,Sequelize)
 db.ItRole = require("./it_roles")(sequelize,Sequelize)
 db.HireingRole = require("./hire_roles")(sequelize,Sequelize)
 db.Blogs = require("./blogs")(sequelize,Sequelize)
 db.Setting = require("./settings")(sequelize,Sequelize)
 db.Sliders = require("./sliders")(sequelize,Sequelize)
 db.Quality = require("./quality_analysis")(sequelize,Sequelize)
 db.Gallery = require("./techdevise_life")(sequelize,Sequelize)
 db.Team = require("./techdevise_team")(sequelize,Sequelize)


db.JobOption.hasMany(db.JobPosition, {
  foreignKey: 'jobOption_id',
  as: 'positions'
});

db.JobPosition.belongsTo(db.JobOption, {
  foreignKey: 'jobOption_id',
  as: 'joboption' 
});
db.JobTitle.hasMany(db.JobOption, {
  foreignKey: 'job_id',
  as: 'options'
});

db.JobOption.belongsTo(db.JobTitle, {
  foreignKey: 'job_id',
  as: 'jobtitle'
});

db.ItRole.hasMany(db.HireingRole, {
  foreignKey: 'It_role_id',
  as: 'HireRoles'
});

db.HireingRole.belongsTo(db.ItRole, {
  foreignKey: 'It_role_id',
  as: 'It_Role'
});

db.JobTitle.hasMany(db.JobSubTitle, {
  foreignKey: 'job_id',
  as: 'jobsubtitle'
});

db.JobSubTitle.belongsTo(db.JobTitle, {
  foreignKey: 'job_id',
  as: 'jobTitle'
});


db.JobSubTitle.hasMany(db.JobOption, {
  foreignKey: 'sub_job_id',
  as: 'Options'
});

db.JobOption.belongsTo(db.JobSubTitle, {
  foreignKey: 'sub_job_id',
  as: 'jobSub_title'
});
module.exports = db;
