const express = require('express');
const app =express();
const cors =require('cors')
const port= 3001;
const host = 'localhost';
const mongoose = require('mongoose') //error occure
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://tharika:996342@cluster0.zf9mm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connect =async () =>{
    try{
        await mongoose.connect(uri);
        console.log('connected to MongoDB');
    }
    catch(error){
        console.log('MongoDB Error:' , error);
    }
};
connect();


const server = app.listen(port, host, ()=>{
    console.log(`node server is listening to ${server.address().port} `)
});

app.use('/api', router);