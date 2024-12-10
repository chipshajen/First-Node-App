const pool = require('./pool')

async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows
}

async function addMessage(data) {
    try{
        await pool.query(`INSERT INTO messages (message, "user") 
                      VALUES ($1, $2)`, [data.message, data.user])
    } catch(err){
        console.log(err)
    }
    
}


module.exports = {
    getMessages,
    addMessage
}