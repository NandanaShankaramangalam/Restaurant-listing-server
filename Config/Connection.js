const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'Nanda@123',
  database: 'restaurant',
});

module.exports = sequelize;