var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb",
  port: "3306"
});

con.query("SELECT pStatus FROM table1 WHERE pName = 'Nate'", function (err, rows) {
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    console.log(row.pStatus);
    process.exit(0);
}
});