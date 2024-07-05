// src/models/Airport.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const City = require('./City');
const Country = require('./Country');

const Airport = sequelize.define('Airport', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  icao_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  iata_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude_deg: {
    type: DataTypes.FLOAT,
  },
  longitude_deg: {
    type: DataTypes.FLOAT,
  },
  elevation_ft: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'Airport',
  timestamps: false,
});

Airport.belongsTo(City, { foreignKey: 'city_id' });
Airport.belongsTo(Country, { foreignKey: 'country_id' });

module.exports = Airport;
