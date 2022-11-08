
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "appamada",
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

    const classlist = getClasses("Everyone")
    
    for (var i = 0; i < classlist.length; i++) {
        con.query("CREATE TABLE "+classlist.cname, function (err, rows) {
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