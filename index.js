const mysql = require('mysql');
const express = require('express');
const { Schema } = require('mongoose');
var router= express.Router();
//Configuring express server

router.use(express.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'k@vya@123',
    database: 'employees',
    multipleStatements: true
    });
    mysqlConnection.connect((err)=> {
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        });
router.get('/employees' , (req, res) => {
    mysqlConnection.query('select * from employees;', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    //return res.console.log(rows);    
    else
    console.log(err);
    })
    } );
    //Router to GET specific item detail from the MySQL database
router.get('/employees' , (req, res) => {
    mysqlConnection.query('SELECT * from employees WHERE id = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

module.exports=router;
 