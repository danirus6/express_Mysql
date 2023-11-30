const express = require('express')
const app = express()
const mysql = require('mysql2')

const PORT = 3000;

app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
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

app.get('/createCategories', (req, res) => {

    const sql = 'CREATE TABLE categories(id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL)';

    db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Categories created...');
    });
});

app.get('/createProducts', (req, res) => {

    const sql = 'CREATE TABLE products(id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, price INT NOT NULL,category_id INT, FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE ON UPDATE CASCADE)';

    db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Products created...');
    });
});

// app.post('/createProduct', (req, res) => {
//     const sql = 'INSERT INTO products (id, name, price, category_id

// });

app.post('/createCategory', (req,res) =>{
    const sql = `INSERT INTO categories (name) values ('${req.body.name}');`;

});

app.listen(PORT, () =>
    console.log(`This server is started at port http://localhost:${PORT}`)
)