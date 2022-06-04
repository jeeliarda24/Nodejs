const express = require('express')
const bodyParser = require('body-parser')

const app = express()

/* Meddileware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

const port = 3001

const mysql = require('mysql')

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "mysql"
}   

app.listen(port, () => {
    console.log("listening on port: ", port)
})

