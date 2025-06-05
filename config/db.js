import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_NAME
})

db.getConnection().then(() => {
    console.log('MySQL Connected')
}).catch((err) => console.log('Connection error', err.message))

export default db