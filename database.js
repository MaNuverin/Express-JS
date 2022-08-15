const mysql = require('mysql')
const express =  require('express')

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password : "",
    database : "mysqJ"
})

//connect to mysql

db.connect()

const app = express()

app.get("/", (req, res) => {
    db.query("CREATE DATABASE mysqJ", (err) => {
        if(err) {throw err};
    })
    res.send('DATABASE HAS BEEN CREATED!');
})
// create Table
app.get('/table', (req, res) => {
    let DataB = "CREATE TABLE UserId(id INT, name VARCHAR(255), address VARCHAR(255), PRIMARY KEY(id))"
    db.query(DataB, err =>{
        if(!err) {throw err};
    })
    res.send("TABLE HAS BEEN CREATED")
})
//select table
app.get('/select',(req, res) => {
    let sql = "SELECT * FROM UserId"
    db.query(sql, (err, result) => {
        if(err) {throw err};
        console.log(result)
      res.send('Select Table Fetched')  
    })
    
    
})

//update table
app.get('/table/:id', (req, res) => {
    let newName = 'JAKA'
    let sql = `UPDATE UserId SET name = ${newName} WHERE ID = ${req.params.id}`
    db.query(sql, (err) => {
        if(err) {throw err};
        
    })
    res.send('DATA UPDATE')
})
// delete table
app.get('/delete/:id', (req, res) => {
    let sql = `DELETE FROM UserId WHERE ID = ${req.params.id}`
    db.query(sql, err => {
        if(err) {throw err};
        res.send('Data Deleted')
    })
    
})
//insert table 
app.get('/insert', (req, res) => {
    let post = {name : 'Hilmy', address: 'Rumah BEKASI'}
    let sql = 'INSERT INTO UserId SET ?'
    db.query(sql,post, err => {
        if(err) {throw err};
    })
    res.send('INSERT TABLE DATABASE')
})

app.listen('5000', () => {
    console.log('SERVER RUNNING!')
})