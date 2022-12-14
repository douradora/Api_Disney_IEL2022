const filterSpecificField = require("../services/filterSpecificField")
const Database = require('../database/disney_movies.json');
const seachForField = require("../services/seachForField");

module.exports = class filterController {



    hanleYearsAndGende(req, res) {
        const filterYears = filterSpecificField(Database, 'release_date');
        const filterGenre = filterSpecificField(Database, "genre");

        const formateDate = filterYears.map((year) => {
            return new Date(year).getFullYear().toString();
        })

        const noRepeatDate = [...new Set(formateDate)];
        const noRepeatGenre = [...new Set(filterGenre)];

        const removeEmptyFieldsDate = noRepeatDate.filter(value => !isNaN(value));
        const removeEmptyFieldsGenre = noRepeatGenre.filter(value => value !== "");
      
        res.status(200).json({ years: removeEmptyFieldsDate, genre: removeEmptyFieldsGenre })



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
        const keysFilter = Object.keys(filter).find((element) => {
            return element == "genre" || element == "years";
        });

        if (!keysFilter) {
            return res.json({ movies: [] })
        }




        const { genre, years } = filter;

        const fieldFilterGenre = new seachForField(movies, 'genre', genre);
        const fieldFilterYears = new seachForField(fieldFilterGenre, "release_date", years);

        return res.status(200).json({ movies: fieldFilterYears });






    }










}



