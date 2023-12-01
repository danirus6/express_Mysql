const mysql = require('mysql2');

const db = mysql.createConnection({

    host: '',

    port: '',

    user: '',

    password: '',

    // database: 'mysqlito'

});



db.connect();


app.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE mysqlito'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('Database created...')
    })
});

module.exports = db;