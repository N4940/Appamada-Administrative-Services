var mysql = require('mysql');
var http = require('http');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb",
  port: "3306"
});

var getList = "";

con.connect(function(err) {
  if (err) throw err;
  getList = con.query("SELECT pName FROM table1 Where pStatus = 'Teacher'", function (err, result, fields) {
    
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(getList);
  }).listen(8080);

  });
});