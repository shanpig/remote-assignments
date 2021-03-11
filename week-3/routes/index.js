const express = require("express");
const router = express.Router();
router.use(express.static("public"));

router.get("/", (req, res)=>{ res.render("index");})

// getData
router.get("/getData", (req, res)=>{
  let result = getDataHandler(req);

  res.locals.result = result;
  res.render("calculate");
})
router.post("/getData", (req, res)=>{
  let result = getDataHandler(req);

  res.send(result);
})

function getDataHandler(req){
  let result;
  let hasNumber = req.query.hasOwnProperty("number");

  if (!hasNumber){ result = "Lack of Parameter";}
  else {
    let number = +req.query.number;
    let isValid = number & number > 0;

    if (isValid){
      let string = [];
      for (let i=1; i<=number; i++){ string.push(i);}

      let sum = string.reduce((sum, i) => sum+i );
      
      result = `${string.join(" + ")} = ${sum}`
    }
    else{ result = "Wrong parameter !";}
  }
  return result;
}


// myName
router.get("/myName", (req, res)=>{
  let username = req.cookies.username;
  res.render("myName", {username});
})
router.get("/trackName", (req, res)=>{
  let username = req.query.name;
  res.cookie("username", username);
  res.redirect("/myName");
})

// logout
router.get("/logout", (req, res)=>{
  res.clearCookie("username");
  res.redirect("/");
})

module.exports = router;