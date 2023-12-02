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

app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products'

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send({ message: 'Get products', result })
    })
});

app.get('/categories', (req, res) => {
    const sql = 'SELECT * FROM categories'

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send({ message: 'Get category', result })
    })
});

app.get('/productosConCategorias', (req, res) => {
    const sql = `
    SELECT products.*, categories.name AS category_name
    FROM products
    INNER JOIN categories ON products.category_id = categories.id
  `;

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('gg')
    })
});

app.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE expressSqlitoDB'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('Database created...')
    })
});

app.get('/getProduct/id/:id', (req, res) => {
    const sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('done')
    })
});
app.get('/getProduct/name/:name', (req, res) => {
    const productName = req.params.name;
    const sql = `SELECT * FROM products WHERE name LIKE '%${productName}%'`;
    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('done')
    })
});

app.get('/getProductsDesc', (req, res) => {
    const sql = `SELECT * FROM products ORDER BY id DESC`;
    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('done')
    })
});

app.get('/getCategory/id/:id', (req, res) => {
    const sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('done')
    })
});
app.get('/createCategories', (req, res) => {

    const sql = 'CREATE TABLE categories(id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL)';

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Categories created...');
    });
});

app.get('/createProducts', (req, res) => {

    const sql = 'CREATE TABLE products(id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, price INT NOT NULL,category_id INT, FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE ON UPDATE CASCADE)';

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Products created...');
    });
});

app.post('/createProduct', (req, res) => {
    const sql = `INSERT INTO products (name, price, category_id) VALUES ('${req.body.name}','${req.body.price}', '${req.body.category_id}');`
    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('Product added...')
    })
});

app.post('/createCategory', (req, res) => {
    const sql = `INSERT INTO categories (name) values ('${req.body.name}');`;

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('Category added...')
    })
});

//UPDATES
app.put('/category/id/:id', (req, res) => {

    const sql = `UPDATE categories SET name = '${req.body.name}' WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send('Category updated...')
    })
});

app.put('/product/id/:id', (req, res) => {
    const productId = req.params.id;
    const newProduct = {
        //EJEMPLOS DE COMO RECOGER DATOS
        name: req.body.name ? req.body.name : name,
        price: req.body.price || price
    }
    const sql = `UPDATE products SET name = '${newProduct.name}' AND price= '${newProduct.price}' WHERE id = ${productId.id}`;

    db.query(updateQuery, updateValues, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error' });
        } else {
            res.json({ message: 'done' });
        }
    });
});

//DELETE
app.delete('/deleteProduct/:id', (req, res) => {
    const sql = `DELETE FROM products WHERE id = ${req.params.id}`

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send('Post deleted')
    })
})



app.listen(PORT, () =>
    console.log(`This server is started at port http://localhost:${PORT}`)
)