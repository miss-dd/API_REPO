module.exports = {
    host: 'localhost',
    user: 'root',
    password: '03Aug2002',
    db: 'test',
    dialect: 'mysql',

 pool:{
     max: 2,
     min: 0,
     acquire: 30000,
     idle: 10000

 }
};