// //// FIELDS ///////////////////////////////////////////////////
const JokeController = require("../controllers/joke.controller");
console.log("****************** 5-routes********************");
// //// ROUTES ///////////////////////////////////////////////////
module.exports = (app) =>{
    app.get("/api/jokes/random",JokeController.findRandomJoke);
    app.post("/api/jokes/new",JokeController.createNewJoke);
    app.get("/api/jokes",JokeController.findAllJokes);
    app.get("/api/jokes/:id",JokeController.findOneJoke);
    app.put("/api/jokes/update/:id",JokeController.updateOneJoke);
    app.delete("/api/jokes/delete/:id",JokeController.deleteOneJoke);
}
console.log("------------------ 5-routes ---------------------");
