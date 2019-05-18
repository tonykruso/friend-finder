//dependency
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//express servers
var app = express();
var PORT = process.env.PORT || 3030;

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app/public'));

require("./apps/routing/apiRoutes.js")(app);
require("./apps/routing/htmlRoutes.js")(app);

//listener
app.listen(PORT, () =>
console.log("listening on port: " + PORT));