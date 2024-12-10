const { Client } = require('pg');
require('dotenv').config();

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        message VARCHAR(255) NOT NULL,
        username VARCHAR(25) NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO messages (message, username)
    VALUES
        ('you are awesome', 'seb'),
        ('you are great', 'brittany'),
        ('you are daddy', 'wifer');
`;

async function main() {

    try {
        console.log('...seeding')
        const client = new Client({
            connectionString: process.env.DB_STRING,
            ssl: {
                rejectUnauthorized: false
            }
        })
        await client.connect()
        await client.query(SQL)
        await client.end()
        console.log('done')
    } catch (err) {
        console.log(err)
    }


}

main()