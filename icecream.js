var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8095;
var app= express();

app.engine("handlebars",exphbs({defaultLayout : "main"}));
app.set("view engine","handlebars");

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
    { name: "pistachio", price: 11, awesomeness: 15 }
  ];


app.listen(PORT,function(){
console.log("server listening: "+PORT);
});

app.get("/ice/:name",function(req,res){
    var userIcecream = req.params.name;

    for(var i=0;i < icecreams.length; i++){
        if(icecreams[i].name === userIcecream){
          res.render("icecream",{
            userIcecream: icecreams[i].name,
            price : icecreams[i].price,
            awesomeness : icecreams[i].awesomeness
          });
        }
    } 
});

app.get("/icecream",function(req,res){
   res.render("allicecream",{ics:icecreams});
});
