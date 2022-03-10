const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company'
})

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Successful connection to database');
    }
})

module.exports = mysqlConnection;