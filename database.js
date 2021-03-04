const mysql = require('mysql');

/*
const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'bee8020b1a1e24',
    password: '686316dc',
    database: 'heroku_079683f81f34309'
});
*/

//bee8020b1a1e24:686316dc@us-cdbr-east-03.cleardb.com/heroku_079683f81f34309
const dburl = process.env.MYSQL_ADDON 
    ||   'mysql://' + process.env.DB_USER||'bee8020b1a1e24'+ ':' + process.env.DB_PASS||'686316dc'
        + '@localhost/' + process.env.DB_NAME||'heroku_079683f81f34309';

const conn = mysql.createConnection(dburl);

function handleDisconnect() {
    connection = mysql.createConnection(conn); 

    connection.connect(function(err) {              
        if(err) {                                     
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); 
        }                                     
    });                                     
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
            handleDisconnect();                        
        } else {                                      
            throw err;                                  
        }
    });
}

handleDisconnect(); 




module.exports = mysqlConnection;