//dependency
var path = require("path");
module.exports = function(app){

//GET request    
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    app.use(function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};