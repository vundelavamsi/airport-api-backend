// src/models/Country.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Country = sequelize.define('Country', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country_code_two: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country_code_three: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  continent_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Country',
  timestamps: false,
});

module.exports = Country;
