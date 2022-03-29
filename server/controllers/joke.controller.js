// //// FIELDS //////////////////////////
const Joke = require("../models/joke.model");
console.log("**************** 4-controller ****************");

/**
 * Create 
 * @param {*} request 
 * @param {*} response 
 */
const createNewJoke = (request, response) =>{
    console.log("*** controller-createnewjoke ***");
    console.log("Request-body ",request.body);
    Joke.create(request.body)
        .then(newlyCreatedJoke => response.status(201).json({   joke: newlyCreatedJoke }))
        .catch(err => response.status(400).json({   mesage: "Something went wrong", error: err }));
}

/**
 * Retrieve all Jokes from DB
 * @param {*} request 
 * @param {*} response 
 */
const findAllJokes = (request, response) =>{
    console.log("**** controller-find all jokes ****");
    Joke.find()
        .then(allJokes => response.status(200).json({ jokes:allJokes }))
        .catch(err=>response.status(400).json({ message: "Unable to find all jokes", error: err }))
}

/**
 * Retrieve joke by id
 * @param {*} request 
 * @param {*} response 
 */
const findOneJoke = (request,response) => {
    console.log("**** Controller-Find One JOke ****");
    console.log("request params id:",request.params.id);
    Joke.findById(request.params.id)
        .then(singleJoke=>response.status(200).json({joke:singleJoke}))
        .catch(err => response.status(400).json({mesage:"Something went wrong",error:err}))
}
/**
 * Retrieve a Random joke
 * @param {*} request 
 * @param {*} response 
 */
const findRandomJoke = (request, response) =>{
    console.log("**** Controller - find random joke ****");
    Joke.find()
        .then(allJokes =>{ 
            const all = [...allJokes];
            console.log(all);
            const randomNumber = Math.floor(Math.random()*allJokes.length);
            const randomJoke = allJokes.length>0?allJokes[randomNumber]:[];
            response.status(200).json({joke:randomJoke})
        })
        .catch(err=>response.status(400).json({mesage:"Something went wrong",error:err}))
}

/**
 * Update one joke by id
 * @param {*} request 
 * @param {*} response 
 */
const updateOneJoke = (request, response) => {
    console.log("**** controller - Update a joke ****");
    Joke.findByIdAndUpdate(request.params.id, request.body, {new:true,runValidators: true })
        .then(updatedJoke => response.status(200).json({joke:updatedJoke}))
        .catch(err=> response.status(400).json( {message:"Something went wrong",error:err} ) )
}

const deleteOneJoke = (request, response) => {
    console.log("***** controller - delete a joke *****");
    Joke.findByIdAndDelete(request.params.id)
        .then(()=>response.status(204).end())
        .catch(err=>response.status(400).end())
}

module.exports = {
    createNewJoke,
    findAllJokes,
    findOneJoke,
    findRandomJoke,
    updateOneJoke,
    deleteOneJoke
}
console.log("----------------- 4-controller -----------------");
