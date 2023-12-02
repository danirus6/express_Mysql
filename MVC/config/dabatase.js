const mysql = require('mysql2');

const db = mysql.createConnection({

    host: 'localhost',

    port: 6666,

    user: 'root',

    password: 'Hellelo12343',

    // database: 'mysqlito'

});



db.connect();


module.exports = db;