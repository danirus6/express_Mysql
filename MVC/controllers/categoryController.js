const db = require('../config/database.js')


const CategoryController = {
    create(req, res) {

        const sql = `INSERT INTO categories (name) values ('${req.body.name}');`;

        db.query(sql, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('Category added...')
        })
    },
    getAll(req, res) {
        const sql = 'SELECT * FROM categories'

        db.query(sql, (err, result) => {
            if (err) throw err
            res.send({ message: 'Get Categories', result })
        })
    },
    getById(req, res) {
        const sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;

        db.query(sql, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    update(req, res) {
        const sql = `UPDATE categories SET name = '${req.body.name}' WHERE id = ${req.params.id}`;

        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Category updated...')
        })
    },
    delete(req, res) {
        const sql = `DELETE FROM categories WHERE id = ${req.params.id}`

        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Post deleted')
        })
    },
}

module.exports = CategoryController
