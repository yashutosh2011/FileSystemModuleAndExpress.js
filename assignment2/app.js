const fs = require('fs');
const express = require('express');

const app = express();
const port =6500;

app.get('/',(req,res)=>{
res.send('<h1> Welcome to module 2 assignment</h1> </br>  <h3> Server started </h3>');
});

app.get('/getData', function(req,res){
    fs.readFile('./db/app-data.json',(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(JSON.parse(result));
        }
    })
});


app.listen(port, function(err){
console.log("server is running on port",port);
})