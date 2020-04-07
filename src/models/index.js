import Sequelize from 'sequelize';
import path from 'path';
const env = process.env.NODE_ENV || "development";
const config    = require(path.join(__dirname, '../../', 'config', 'database.json'))[env];


if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL,{
    underscored: true,
  });
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password,{
    dialect:"mariadb",
    define:{
      underscored: true,
    },
  });
}

let db = {
    User: sequelize.import('./User'),
};

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

export default db