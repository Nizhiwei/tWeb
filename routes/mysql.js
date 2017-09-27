/**
 * Created by nizhiwei-labtop on 2017/5/8.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.101.85',
    user     : '51fanbei',
    password : 'Hello1234',
    database : '51fanbei_app'
});
connection.connect();
connection.query('SELECT name from city where id="1"', function(err, rows) {
    if (err) throw err;
    console.log(rows);
});
connection.end();