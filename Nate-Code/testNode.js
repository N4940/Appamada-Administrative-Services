var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb",
  port: "3306"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM table1", function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.parse(JSON.stringify(result)));
  });
});