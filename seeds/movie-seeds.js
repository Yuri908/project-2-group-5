const { Movie } = require("../models");
const seedMovies = () => Movie.bulkCreate(moviedata);

const moviedata = [
  {
    title: "Juice",
    post_url: "https://www.imdb.com/title/tt0104573/?ref_=fn_al_tt_1",
    Release: 1992,
  },

  {
    title: "Inception",
    post_url: "https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1",
    Release: 2010,
  },
];

module.exports = seedMovies;
