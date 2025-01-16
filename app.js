const express = require('express');
const app = express();
const usermodel = require('./usermodel');


app.get('/',function(req,res){
    res.send('hey');
})

app.get('/create', async function(req,res){
    let createduser = await usermodel.create({
        name:'Karthik',
        email:'karthik@gmail.com',
        username:'Karthik',

    })
    res.send(createduser);
})


app.get('/read', async function(req,res){
    let users = await usermodel.find();

    res.send(users);
});


app.get('/update', async function(req,res){
    let updateduser = await usermodel.findOneAndUpdate({username:'Karthik'}, {name:'weasker'}, {new:true});
    res.send(updateduser);
})


app.get('/delete', async function(req,res){
    let deleteduser = await usermodel.findOneAndDelete();
    res.send(deleteduser);
})




app.listen(3000,function(){
    console.log('App is running on port 3000');
    
});