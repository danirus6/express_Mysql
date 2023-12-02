const db = require('../config/database')

//CAMBIAR TODO
const ProductController = {
    create(req, res) {
        let product = { name: req.body.name, price: req.body.price, category: req.body.category }
        let sql = 'INSERT INTO products (name, price, category_id) SET ?'
        db.query(sql, product, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('Product added...')
        })
    },
    getAll(req, res) {
        const sql = 'SELECT * FROM products'

        db.query(sql, (err, result) => {
            if (err) throw err
            res.send({ message: 'Get products', result })
        })
    },
    getByName(req, res) {
        const productName = req.params.name;
        const sql = `SELECT * FROM products WHERE name LIKE '%${productName}%'`;

        db.query(sql, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('done')
        })
    },
    getByDesc(req, res) {
        const sql = `SELECT * FROM products ORDER BY id DESC`;
        db.query(sql, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('done')
        })
    },
    getById(req, res) {
        const sql = `SELECT * FROM products WHERE id = ${req.params.id}`

        db.query(sql, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    update(req, res) {
        const productId = req.params.id;
        const newProduct = {
            //EJEMPLOS DE COMO RECOGER DATOS
            name: req.body.name ? req.body.name : name,
            price: req.body.price || price
        }
        const sql = `UPDATE products SET name = '${newProduct.name}' AND price= '${newProduct.price}' WHERE id = ${productId.id}`;

        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Post updated...')
        })
    },
    getWithCategories(req, res) {
        const sql = `SELECT products.*, categories.name AS category_name FROM products INNER JOIN categories ON products.category_id = categories.id`;

        db.query(sql, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('gg')
        })
    },
    delete(req, res) {
        const sql = `DELETE FROM products WHERE id = ${req.params.id}`

        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Post deleted')
        })
    },
}

module.exports = ProductController
