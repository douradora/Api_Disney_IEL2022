const filterSpecificField = require("../services/filterSpecificField")
const Database = require('../database/disney_movies.json');
const seachForField = require("../services/seachForField");

module.exports = class filterController {



    hanleYearsAndGende(req, res) {
        const filterYears = filterSpecificField(Database, 'release_date');
        const filterGenre = filterSpecificField(Database, "genre");

        const formateDate = filterYears.map((year) => {
            return new Date(year).getFullYear();
        })

        const noRepeatDate = [...new Set(formateDate)];
        const noRepeatGenre = [...new Set(filterGenre)];

        const removeEmptyFields = noRepeatGenre.filter(value => value !== "");

        res.status(200).json({ years: noRepeatDate, genre: removeEmptyFields })



    }

    handleMoviesSeache(req, res) {
        const { filter } = req.body;

        const movies = new seachForField(Database);

        if (!filter) {
            return res.status(400).json({
                status: "requisiçao mal formatada",
                message: "consulte o manual da api para requisiçao correta"
            })
        }
        const { genre, years } = filter;

        const fieldFilterGenre = new seachForField(movies, 'genre', genre);
        const fieldFilterYears = new seachForField(fieldFilterGenre, "release_date", years);

        res.json({ movies: fieldFilterYears });






    }










}



