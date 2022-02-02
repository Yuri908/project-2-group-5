const { Shows } = require("../models");

const showData = [
  {
    Title: lorum,
    Genre: lorum,
    Channel: lorum,
  },
  {
    Title: lorum,
    Genre: lorum,
    Channel: lorum,
  },
];

const seedShows = () => Vote.bulkCreate(showData);

module.exports = seedShows;
