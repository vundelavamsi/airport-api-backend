// src/models/City.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Country = require('./Country');

const City = sequelize.define('City', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  lat: {
    type: DataTypes.FLOAT,
  },
  long: {
    type: DataTypes.FLOAT,
  },
}, {
  tableName: 'City',
  timestamps: false,
});

City.belongsTo(Country, { foreignKey: 'country_id' });

module.exports = City;
