const express = require('express');
const router = express.Router();
const User = require('../models/user');

//Defining Rest APIs

//Get
router.get('/users', (req,res,next)=>{
    User.find().then((documents)=>{
        console.log('Get request recieved for all Documents');
        res.send(documents);
    }).catch(next);
});

module.exports = router;