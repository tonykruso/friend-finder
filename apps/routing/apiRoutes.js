var friends = require("../data/friends.js");

//route and API GET and POST requests
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });
    app.post('/api/friends', function(req, res){
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userScore = userData.score;
        var b = userScore.map(function(item){
            return parseInt(item, 10);
        });
        userData = {
            "name": req.body.name,
            "photo": req.body.photo,
            "score": b
        }
        console.log("name: " + userName);
        console.log("user score " + userScore);
        var sum = bestScore((a,b)=> a +b, 0);
        console.log("sum of users score: " + sum);
        console.log("best match friend difference " + bestMatch.friendDifference);
//loops thru all options of friends
        for (var i = 0; i < friends.length; i++){
            console.log(friends[i].name);
            totalDifference = 0;

            var bestFriendScore = friends[i].scores.reduce((a,b)=> a + b, 0);
            totalDifference += Math.abs(sum - bestFriendScore);
        }   
        friends.push(userData);
        res.json(bestMatch);     
    })
}