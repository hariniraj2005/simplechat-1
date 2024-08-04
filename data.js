const express=require('express');

const fs=require('fs');

const router=express.Router();

router.get("/",(req,res)=>{
    fs.readFile("message.txt",(err,data)=>{
        if(err){
            console.log(err);
            data='No chat Exists';
        }
      res.send(`${data}<html>
        <form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" id="message" name="message" placeholder="Message">
        <input type="hidden" name="username" id="username"><br>
        <button type="submit">send</button>
        </form></html>`)
})
})

router.post("/",(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("message.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>
    err?console.log(err):res.redirect("/")
)
})

module.exports=router;