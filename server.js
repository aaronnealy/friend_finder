// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require("express");
// const path = require("path");
// const friends = require("app/data/friends.js")


// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8055;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// // =============================================================================
// // LISTENER
// // The below code effectively "starts" our server
// // =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});