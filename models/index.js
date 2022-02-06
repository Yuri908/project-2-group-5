// import all models
const Movie = require("./Movie");
const User = require("./User");
// const Show = require("./Show");
// const Vote = require("./Vote");

// create associations
User.hasMany(Movie, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Movie.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

module.exports = { User, Movie };
