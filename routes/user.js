// const express = require('express')
// const router = express.Router()


// router.get('/users', (req, res) => {
//     res.send(' root route ')
// }) 
// router.get('/users/:id', (req, res) => {

//     console.log(req.params.id);
//     res.status(200).json({ createdUsers: 'users route' })
    
// }) 



// module.exports = router








const express = require("express")
const router = express.Router()

const users = [
    {
      "userId": 1,
      "username": "johndoe",
      "email": "johndoe@example.com"
    },
    {
      "userId": 2,
      "username": "janedoe",
      "email": "janedoe@example.com"
    },
    {
      "userId": 3,
      "username": "alice_smith",
      "email": "alice.smith@example.com"
    },
    {
      "userId": 4,
      "username": "bob_jones",
      "email": "bob.jones@example.com"
    },
    {
      "userId": 5,
      "username": "charlie_brown",
      "email": "charlie.brown@example.com"
    },
    {
      "userId": 6,
      "username": "david_white",
      "email": "david.white@example.com"
    },
    {
      "userId": 7,
      "username": "emma_clark",
      "email": "emma.clark@example.com"
    },
    {
      "userId": 8,
      "username": "frank_harris",
      "email": "frank.harris@example.com"
    },
    {
      "userId": 9,
      "username": "grace_martin",
      "email": "grace.martin@example.com"
    },
    {
      "userId": 10,
      "username": "henry_lee",
      "email": "henry.lee@example.com"
    }
  ]



///specific user/////

// router.get('/userWithId/:userId',(req,res)=>{
// const  specificUser = users.find ((e)  => e.userId == req.params.userId )
// console.log(specificUser);
// if (specificUser){
//     res.status(200).json({user:specificUser})
// }
// })






////get All user/////

// router.get('/allUser',(req,res)=>{
//     res.status(200).json({AllUsers:users})
// })





////create new user//////

// router.post('/createUser',(req,res)=>{
//     console.log(req.body);
//     users.push(req.body)
//     res.status(200) .json ({users: users})
// })


//////////update user///////

router.put ('/updateUser/:userId',(req,res)=>{
    const {username,email} = req.body
    const userId =req.params.userId

   const UpdateUsers= users.map((user)=>{
        if(user.userId == userId){
            return {...user,username:username,email:email}
        }
        return user
    })

    res.status(200).  json({UpdateUsers:UpdateUsers,message:'updated succesfully'})
})



module.exports= router