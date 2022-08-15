


const Router = require("express");
const filterController = require("./controller/FilterController");


const route = Router();


route.get('/filters', new filterController().hanleYearsAndGende);
route.get('/movies', new filterController().handleMoviesSeache);


module.exports = route;