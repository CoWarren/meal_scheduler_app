const { Sequelize } = require('sequelize');

// Database Conneciton
module.exports.db = new Sequelize('postgres://msa:Password123@127.0.0.1:5432/msa');

module.exports.db_test = async function db_test(db_) {
    try {
        await db_.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}