const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    hots: 'localhost',
    user: 'root',
    password: '',
    database: 'school'
});

mysqlConnection.connect(function(e){
    if(e){
        console.log(e);
        return;
    }else{
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;