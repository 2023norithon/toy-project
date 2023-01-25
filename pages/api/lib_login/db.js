var mysql = require('mysql2');
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "asd111",
    database: "NORITHON"
});
db.connect();

module.exports = db;