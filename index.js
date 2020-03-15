var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get("/", function(req,res){
	var num = Math.floor((Math.random() * 10)+1);
	console.log("REQUESTED LUCKY NUMBER ROUTE");
	res.send("Your lucky number is : " + num);
});

app.listen(port, function(){
	console.log("Server running on 8080!");
});
