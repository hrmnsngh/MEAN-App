const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const test = require('assert');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

 //Connection url
const dbUrl = 'mongodb://localhost:27017';

/*
//DB name
const dbName = 'test';

//Connect using MongoClient
mongoClient.connect(dbUrl, (err, client)=>{
    if(err) throw err;
    //User admin db for the opreations
    const adminDb = client.db(dbName).admin();

    //list all the available dbs
    adminDb.listDatabases((err,dbs)=>{
        test.equal(null,err);
        test.ok(dbs.databases.length > 0);
        client.close();
    });
}); */

const server = express();

//connect to mongoose
//mongoose.set();
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(bodyParser.json());

//initialize routes
server.use('/api',routes);

//Error Handling middlware
server.use((err,req,res,next)=>{
console.log(err);
res.status(422).send({error:err.message});
});

server.listen(process.env.port || 5000, ()=>{
    console.log(`Server listening for request at port 5000`);
})
