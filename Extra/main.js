const express = require('express')
const app = express()
const mysql = require('mysql2')

const PORT = 3000;

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Hellelo12343',
    database: 'expressSqlitoDB', //esto comentar la primera vez para crear la database
});

db.connect()




app.listen(PORT, () =>
    console.log(`This server is started at port http://localhost:${PORT}`)
)