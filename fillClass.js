var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql9.freesqldatabase.com",
    user: "sql9581783",
    password: "xIPNI96VmV",
    database: "sql9581783",
    port: "3306"
});

var Class = "Mixed Team Games" 
var Period = "p10"

con.query("SELECT SName FROM TestRoster WHERE "+Period+" = '"+ Class +"'", function (err, rows) {
    for (var i = 0; i < rows.length; i++) {
        console.log(rows[i].SName)

        // var sqlInput = "INSERT INTO "+Class.replace(/\s/g, '')+" (pName) VALUES ('"+ rows[i].SName +"');";
        // con.query(sqlInput, function (err, rows) {
        //     if (err) throw err;
        // });
    }
    con.end();
});