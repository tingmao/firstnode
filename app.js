var express = require('express');
var app = express();
app.set('view engine', 'ejs');0

var port = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.render("home");
});

app.get("/bye", function(req, res){
  res.render("bye"); 
});

app.listen(port, function(){
     console.log("server is running on port" + port);
});