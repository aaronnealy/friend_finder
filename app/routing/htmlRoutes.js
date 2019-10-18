let path = require("path");

module.exports = function(app) {

    //Serving our HTML files.
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey/index.html"));
    });

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home/index.html"));
    });

    //if no matching route is found default back to home
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home/index.html"));
    });

};