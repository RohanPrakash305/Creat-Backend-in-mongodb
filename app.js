const express = require('express');

const app = express();

const userModel = require('./usermodel');

app.get('/',(req,res)=>{

    res.send("hay")

})
app.get('/creat', async (req,res)=>{

     let  createcuser =   await  userModel.create({
        name:"rohan bhai",
        email: "rohan@gmail.com",
        username:"prakash",
    })

    res.send(createcuser);

})
app.get('/update',async (req,res)=>{

   let updateuser = await userModel.findOneAndUpdate({username:"prakash"},{name:"rohan prakash"},{new: true})
    res.send(updateuser)
})

app.get('/read', async(req,res)=>{
   
   let users = await userModel.find();
     res.send(users);
})

app.get('/delete',async (req,res) =>{

    let userdelete = await  userModel.findOneAndDelete({username:"prakash"});
    res.send(userdelete);
})

app.listen(3000 );