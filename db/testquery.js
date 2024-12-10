const pool = require('./pool')

const SQL = `
    SELECT * FROM messages
`

async function test() {
    const { rows } = await pool.query(SQL)
    console.log(rows)

}

test()