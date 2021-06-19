
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: "remotemysql.com",
    port: 3306,
    user: 'TArhqbh9FB',
    password: "o5aDtpWUGb",
    database: "TArhqbh9FB"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("mysql connected");
})

module.exports = connection;

