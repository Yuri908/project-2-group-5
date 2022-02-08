const { Movies } = require("../models");

const Moviedata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    Genre: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    Release: 10,
  },

  {
    title: "Donec posuere metus vitae ipsum.",
    Genre: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    Release: 10,
  },
];

const seedMovies = () => Post.bulkCreate(movieData);

module.exports = seedMovies;
