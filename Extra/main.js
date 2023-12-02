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

//Añadir Usuarios

app.post('/createUser', (req, res) => {
    const sql = `INSERT INTO users (name, order_id) VALUES ('${req.body.name}', '${req.body.orders_id}');`
    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('User added...')
    })
});

//Añadir pedidos


//SELECT ALL USERS

//SELECT ALL ORDERS

//GET USERS_ORDERS

//GET BY USER:ID

//DELETE USERBYID

app.listen(PORT, () =>
    console.log(`This server is started at port http://localhost:${PORT}`)
)