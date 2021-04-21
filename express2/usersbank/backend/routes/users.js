var express = require('express');
var router = express.Router();
const fs=require("fs");
const cors=require("cors")
/* GET users listing. */
router.use(cors());
router.get('/', function(req, res, next) {
  fs.readFile("users.json",(err,data)=>{
    if(err){
      console.log(err);
    }
    let users=JSON.parse(data);
    
    res.json(users);
  });
 
});
router.post("/new", function(req, res){

 

    let newUser = req.body;
  console.log(newUser);

  fs.readFile("users.json", function(err, data) {
    if (err) {
      console.log(err);
    }

    let users = JSON.parse(data);
    users.push(newUser);

    fs.writeFile("users.json", JSON.stringify(users, null, 2), function(err) {
      if (err) {
        console.log(err);
      }
    })

  })


  res.json("Ny användare sparad");

 

  

});