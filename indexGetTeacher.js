var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql9.freesqldatabase.com",
  user: "sql9581783",
  password: "xIPNI96VmV",
  database: "sql9581783",
  port: "3306"
});

con.query("SELECT * FROM teacher_list", function (err, rows) {
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    console.log(row);
}
process.exit(0);
});