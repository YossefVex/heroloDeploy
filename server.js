// server.js
var express = require('express');
var port = process.env.PORT || 8080;
app = express();
app.use(express.static(__dirname + "/dist"));
app.get(/.*/, function(req, res){
		res.sendfile(__dirname + "dist/index.html")
});

app.listen(port);


console.log('server started '+ port);
// var path = require('path');
// var serveStatic = require('serve-static');
