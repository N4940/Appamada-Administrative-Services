var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "testdb",
    port: "3306"
});

con.query("SELECT * FROM classestable", function (err, rows) {
    var classlist;
    for (var i = 0; i < rows.length; i++) {
        classlist = rows[i].Class
        currentFixed = classlist.replace(/\s/g, '');

        var sqlInput = "CREATE TABLE " + currentFixed + " (pName VARCHAR(30));";
        con.query(sqlInput, function (err, rows) {
            if (err) throw err;
            console.log("created");
        });
    }
    con.end();
});