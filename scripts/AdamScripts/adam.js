
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb",
  port: "3306"
});

function getTeachers(){

    var x = "'Teacher'"

    con.query("SELECT pname FROM people WHERE pstatus = " + x, function (err, rows) {
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        console.log(row.pname);
}
process.exit(0);
});
}


function getClasses(Teacher){

    var x = Teacher;

    if (x == "Everyone"){
            
        con.query("SELECT cname FROM classes", function (err, rows) {
            for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            //console.log(row.cname);
        }
        return rows;
        process.exit(0);
        }

    )} 
    else {
            con.query("SELECT cname FROM classes WHERE cteacher = \""+Teacher+"\"", function (err, rows) {
            for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            console.log(row.cname);
        }
        process.exit(0);
        });
    }
    
    

}

function getroster(cname){

    
    con.query("SELECT pname FROM "+cname, function (err, rows) {
        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          console.log(row.cname);
      }
      process.exit(0);
      });  


}


function createattendancetables(){

    var classlist = con.query("SELECT Teacher FROM classestable", function (err, rows) {});
    console.log(classlist);
    for (var x = 0; x < classlist.length; x++) {
        console.log("inside loop");
        con.query("CREATE TABLE "+classlist[x].cname, function (err, rows) {
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                console.log(row.cname);
            }
      
      process.exit(0);
      });
    }
}

//getClasses("Everyone")
createattendancetables();