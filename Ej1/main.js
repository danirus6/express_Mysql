const express = require('express')
const app = express()
const mysql = require('mysql2')

const PORT = 3000;

app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    port: '6666',
    user: 'root',
    password: 'Hellelo12343',
    database: 'expressSqlitoDB',

});

db.connect()

app.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE expressSqlitoDB'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('Database created...')
    })
})


app.listen(PORT, () =>
    console.log(`This server is started at port http://localhost:${PORT}`)
)