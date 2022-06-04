const {MongoClient} = require ('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName= 'task-manager-api'
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {

    console.log(req.body)
    try {
        MongoClient.connect( connectionURL, {useNewUrlParser: true}, async ( error, client ) => {
            if( error ) {
                return console.log('Unable to connect to database')
            }
        
            console.log( 'Connected correctly' )
            const db = client.db(databaseName)

            //insert one
            db.collection('users').insertOne(req.body,
            (error, result) => {

                if(error) {
                    return console.log('Unable to insert user')
                }

            })

        })
        res.status(201).send("sucessfully insert data")
    } catch (e) {
        res.status(400).send(e)
    }
})
    
//display all users
app.get('/users', (req, res)=>{
    res.send("Display all records")
})
    
//Get by user id
app.get('/users/:id', (req,res)=>{
    res.send("Display one record")
})
    
//update by Id
app.patch('/users/:id', async (req, res)=>{
    res.send("Updated user")
})
    
//deleted Id
app.delete('/users/:id', async (req, res)=>{
    res.send("Deleted User")
})
    
app.listen(port, ()=> {
    console.log('Server is up on port ' + port)
})

