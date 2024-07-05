// src/sync.js
const sequelize = require('./db');
const Airport = require('./models/Airport');
const City = require('./models/City');
const Country = require('./models/Country');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized!');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
};

syncDatabase();
