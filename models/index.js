const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Tutorial = require('./tutorial.model.js')(sequelize,Sequelize);
module.exports = db;