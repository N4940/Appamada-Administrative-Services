var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql9.freesqldatabase.com",
  user: "root",
  password: "root",
  database: "testdb",
  port: "3306"
});

con.query("SELECT * FROM table1", function (err, rows) {
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    console.log(row.pStatus);
    process.exit(0);
}
});