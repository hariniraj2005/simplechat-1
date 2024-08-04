const express=require('express');

const router=express.Router();

router.get("/login",(req,res)=>{
    res.send(`<html>
              <form action="/login" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
              <input type="text" id="username" name="username" placeholder="username"><br>
              <button type="submit">send</button>
              </form>
              </html>`)
             })

router.post('/login', (req, res) => {
  res.redirect('/');
})

module.exports=router;