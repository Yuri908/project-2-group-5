const seedUsers = require("./user-seeds");
const seedMovies = require("./movie-seeds");
// const seedShows = require("./show-seeds(Delete)");
// const seedVotes = require('./vote-seeds');

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedMovies();
  console.log("--------------");

  // await seedShows();
  // console.log("--------------");

  // await seedVotes();
  // console.log('--------------');

  process.exit(0);
};

seedAll();
