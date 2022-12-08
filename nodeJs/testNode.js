var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb",
  port: "3306"
});

con.query("SELECT * FROM table1", function (err, rows) {
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    console.log(row.pName);
}
process.exit(0);
});