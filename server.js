// //// FIELDS ///////////////////
console.log("**************** 1-server *****************");
const express = require("express");
const app = express();
const port = 8000;
// //// MIDDLEWARE //////////////
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

// This is where we import the users routes function from our user.routes.js file
const AllMyJokeRoutes = require("./server/routes/joke.routes");
AllMyJokeRoutes(app);


console.log("---------------- 1-server --------------------");
const server = app.listen(port, () =>
  console.log(`Fake API (Core) on port ${server.address().port}!`)
);