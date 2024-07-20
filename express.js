const e = require("express");
const express=require("express");
const app=express();

app.set('view engine','ejs')

app.get(['/', '/index'], function(_req, res) {
    res.sendFile(__dirname + '/index.html');
  });

app.get("/contact", function(_req,res){
 res.sendFile(__dirname + "/contact.html")
});

app.get("/profile/:name", function(req,res){
 res.render('profile',{person:req.params.name})
});

const port=3000;
const host = '127.0.0.1';
app.listen(port, host, () => console.log(`Server running at http://${host}:${port}`));