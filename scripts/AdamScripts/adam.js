var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "appamada",
  port: "3306"
});

var x = "'Teacher'"

con.query("SELECT pname FROM people WHERE pstatus = " + x, function (err, rows) {
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    console.log(row.pname);
}
});
