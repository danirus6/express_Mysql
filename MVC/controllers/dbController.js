const db = require('../config/database.js')

//CAMBIAR TODO
const DBController = {
    createdb(req, res) {
        const sql = 'CREATE DATABASE expressSqlitoDB'

        db.query(sql, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('Database created...')
        })
    },
    tableCategories(req, res) {
        const sql = 'CREATE TABLE categories(id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL)';
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send({ message: 'Categories Table created....', result })
        })
    },
    tableProducts(req, res) {
        const sql = 'CREATE TABLE products(id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, price INT NOT NULL,category_id INT, FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE ON UPDATE CASCADE)';
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send({ message: 'Product Table created....', result })
        })
    }
}

module.exports = DBController
