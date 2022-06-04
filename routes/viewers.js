const express = require('express')
const router = express.Router()


router.get('/fetch' , (request, response) => {
    response.send("list of viewers")
} )


/* Json file */
/* GET */
// router.get('/fetch' , (request, response) => {
//     response.json({
//         "name": "john",
//         "gender": "male"
//     })
// })


/* POST */
// router.post('/insert' , (request, response) => {
//     response.json({
//         "name": "john",
//         "gender": "male"
//     })
// })

/* Get Parameter */
// router.get('/fetch' , (request, response) => {
//     console.log(request.query)
    
// })


// router.get('/fetch' , (request, response) => {
//     response.send(request.body)
    
// })


// router.get('/fetch' , (request, response) => {
//     response.send(request.headers)
    
// 


// router.get('/fetch' , (request, response) => {
//     const { name, age, gender } = request.query

//     if (number(age) === 23) {
//         response.status(200).send({
//             name,
//             age,
//             gender
//         })
//     }   else{
//         response.status(500).send({
//             "message": "Age is incorrect",
//             "status": "failed!"
//         })

//     }
// })






module.exports = router