const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const routes = require("./routes");
app.use(routes);

app.use((req, res, next)=>{
  let err = req.error || new Error("FILE NOT FOUND");
  err.status = 404;
  next(err);
})

app.use((err, req, res, next)=>{
  res.locals.error = err;
  res.status(err.status||500);
  res.render("error");
})

app.listen(3000, ()=>{console.log("connecting to port 3000....")})