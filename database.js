const mysql = require('mysql');

const mysqlConnection = mysql.createPool({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'bee8020b1a1e24',
    password: '686316dc',
    database: 'heroku_079683f81f34309'
});

//bee8020b1a1e24:686316dc@us-cdbr-east-03.cleardb.com/heroku_079683f81f34309

mysqlConnection.acquireConnection(function(e){
    if(e){
        console.log(e);
        return;
    }else{
        console.log('DB is connected');
    }
});




module.exports = mysqlConnection;