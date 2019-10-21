var friends = require("../data/friends.js")
console.log(friends);



module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });




  app.post("/api/friends", function (req, res) {
    

    var user = req.body;

    console.log(user);
    // for (var i = 0; i < user.scores.length; i++) {
    //   user.scores[i] = parseInt(user.scores[i]);
    //   //  console.log(user.scores[i]);
    // }
 
    user.scores = user.scores.map(function(str){return parseInt(str)})

    var minDiff = 9999;
    var bestMatch = {};

    //Loop through friends array
    friends.map(function(friend){
      //loop through friends scores
      var scoreDiff = 0;
      friend.scores.map(function(score, i){
        //compare scores to user and keep running total
        scoreDiff += Math.abs(score - user.scores[i])
      });
      //if scoreDiff < MinDiff set equal
      if (minDiff > scoreDiff){
        minDiff = scoreDiff;
        bestMatch = friend;
      }
    });

    friends.push(user);
    res.json(bestMatch); //return the just match not all friends
  });

}

