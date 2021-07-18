
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    port: 3306,
    user: 'sql6425926',
    password: "yfNycXJIVj",
    database: "sql6425926"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("mysql connected");
})

module.exports = connection;

