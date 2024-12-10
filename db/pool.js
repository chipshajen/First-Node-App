const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DB_STRING,
    ssl: {
        rejectUnauthorized: false, // Use this if you don't have a custom certificate
    },
});

module.exports = pool;
