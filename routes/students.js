const { request,response } = require('express');
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/students', (request,response) =>{
    mysqlConnection.query('SELECT * FROM students', (e,rows,fields) =>{
        e? console.log(e) : response.json(rows);
    });
});

router.get('/students/:noControl', (request,response) =>{
    const { noControl } = request.params;
    mysqlConnection.query('SELECT * FROM students WHERE noControl = ?',[noControl], (e,rows,fields) =>{
        e? console.log(e) : response.json(rows);
    });
});

router.post('/students/:noControl', (request,response) =>{
    const { noControl } = request.params;
    const { name, lastname, gender, age, semester, career } = request.body;
    const query = 'CALL create_student(?,?,?,?,?,?,?);';
    mysqlConnection.query(query,[noControl, name, lastname, gender, age, semester, career],(e,rows,fields) =>{
        e? console.log(e) :  response.json({Status: 'Usuario guardado'});
    });
});

router.put('/students/:noControl', (request,response) =>{
    const { noControl } = request.params;
    const { name, lastname, gender, age, semester, career } = request.body;
    const query = `CALL update_student(?,?,?,?,?,?,?);`;
    mysqlConnection.query(query,[noControl, name, lastname, gender, age, semester, career], (e,rows,fields) =>{
        e? console.log(e) : response.json({Status: 'Usuario actualizado'});
    });
});

router.delete('/students/:noControl', (request,response) => {
    const { noControl } = request.params;
    const query = `CALL delete_student(?);`;
    mysqlConnection.query(query,[noControl], (e, rows, fields) => {
        e? console.log(e) : response.json({Status: 'Usuario eliminado'});
    });
});

module.exports = router;