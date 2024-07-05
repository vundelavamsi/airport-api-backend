// src/insertData.js
const Country = require('./models/Country');
const City = require('./models/City');
const Airport = require('./models/Airport');

const insertData = async () => {
  try {
    const country = await Country.create({
      name: 'India',
      country_code_two: 'IN',
      country_code_three: 'IND',
      mobile_code: 91,
      continent_id: 1,
    });
    console.log('Country inserted:', country);

    const city = await City.create({
      name: 'Abbigeri',
      country_id: country.id,
      is_active: true,
      lat: 13.0767,
      long: 77.525,
    });
    console.log('City inserted:', city);

    const airport = await Airport.create({
      icao_code: 'NTGA',
      iata_code: 'AAA',
      name: 'Anaa Airport',
      type: 'medium_airport',
      city_id: city.id,
      country_id: country.id,
      latitude_deg: -17.3526,
      longitude_deg: -145.509995,
      elevation_ft: 10,
    });
    console.log('Airport inserted:', airport);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};

insertData();
