# Airport API

This project is an API service for managing airport data using Node.js, Express, Sequelize, and SQLite.

## Table of Contents

1. [Installation](#installation)
2. [Usage - API Setup & Structure](#usage)
3. [Database Setup](#database-setup)


## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
        git clone https://github.com/your-username/airport-api.git
        cd airport-api
    ```
2. Install dependencies:
    ```bash
        npm install
    ```
3. Initialize the database:
    ```bash
        node src/sync.js
    ```
4. Insert Data into tables
    ```bash
        node src/insertData.js
    ```
5. Start the server:
    ```bash
        node index.js
    ```
    The server will start running at `http://localhost:3000`

## Usage

### API Endpoints

 - GET `/airport?iata_code={iata_code}`

    Fetches details of an airport based on its IATA code.

    ```bash
        GET http://localhost:3000/airport?iata_code=AAA
    ```

    Response:
    ```json
        {
            "airport": {
                "id": 1,
                "icao_code": "VABB",
                "iata_code": "BOM",
                "name": "Chhatrapati Shivaji Maharaj International Airport",
                "type": "large_airport",
                "latitude_deg": 19.0887,
                "longitude_deg": 72.8679,
                "elevation_ft": 39,
                "address": {
                "city": {
                    "id": 1,
                    "name": "Mumbai",
                    "country_id": 1,
                    "is_active": true,
                    "lat": 19.076,
                    "long": 72.8777
                },
                "country": {
                    "id": 1,
                    "name": "India",
                    "country_code_two": "IN",
                    "country_code_three": "IND",
                    "mobile_code": 91,
                    "continent_id": 1
                }
                }
            }
        }
    ```

## Database Setup

The project uses SQLite as the database. Sequelize is used as the ORM (Object-Relational Mapping) tool to interact with the database.

### Database Schema
 - Airport: Stores information about airports including IATA code, name, location coordinates, etc.
 - City: Represents cities associated with airports.
 - Country: Contains details about countries including country codes, mobile codes, etc.

### Dependencies

 - Express: Web framework for Node.js.
 - Sequelize: ORM for Node.js, used for database interactions.
 - SQLite3: SQLite driver for Node.js.