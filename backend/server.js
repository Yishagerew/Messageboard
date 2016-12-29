var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.post('/app/message', function(req, res){
    console.log(req.body);
    res.status(200);
})
app.get('/app/message', function(req, res){
    console.log("Hello there");
})
var server = app.listen(5000, function(){
    console.log("Listening on port", server.address().port);
})