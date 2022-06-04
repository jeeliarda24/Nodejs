const {MongoClient} = require ('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName= 'task-manager-api'

let ObjectID = require("bson-objectid");

MongoClient.connect( connectionURL, {useNewUrlParser: true}, async ( error, client ) => {
    if( error ) {
        return console.log('Unable to connect to database')
    }

    console.log( 'Connected correctly' )
    const db = client.db(databaseName)

    //insert one
    // db.collection('users').insertOne({
    //     name: 'Garry1',
    //     age: 27
    // }, (error, result) => {

    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     // console.log(result.ops)
    //     console.log("compare id: ")
    //     console.log(result.insertedId)

    // })

    // // insertMany
    // const users = [{
    //     name: 'Jen',
    //     age: 28
    // }, {
    //     name: 'Gunther',
    //     age: 27
    // }]

    // db.collection('users').insertMany(users, (error, result) =>{
    //     if( error ) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.insertedCount)
    //     console.log(result.insertedIds)
    //     console.log(JSON.stringify(result))
    // })

    // //find by objectID
    // db.collection('users').findOne({ _id: new ObjectID("629b0cb980fee4106b5e8581") }, (error, user) => {

    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // const data = [{
    //     name: 'Jen',
    //     age: 28
    // }]

    // const result = await db.deleteOne(data);

    await db.collection('users').deleteOne({ _id: new ObjectID("629b0eb50148d1c3a86276c1")})
})