let friends = require("../data/friends.js")
console.log(friends)

module.export = function (app) {
    app.get("./api/friends", function (req,res){
        return res.json(friends);
    })

    app.post("/api/friends", function (req, res){
        var user = req.body;

        console.log(user)

        user.scores = user.scores.map(function(str){return parseInt(str)})

        var minDiff = 9999;
        var bestMatch = {};

        // loop through friends array
        friends.map(function(friend){
            //loop through friend scores
            var scoreDiff= 0;
            friend.scores.map(function(score, i){
                //compare scores to user and keep running total
                scoredDiff +=Math.abs(score - user.scores[i])
            });

            if (minDiff > scoreDiff){
                minDiff = scoreDiff;
                bestMatch = friend;
            }
        });

        friends.push(user);
        res.json(bestMatch); //return the just match and not all friends
    });
}