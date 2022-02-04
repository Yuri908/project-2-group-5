// import all models
const Movie = require("./Movie");
const User = require("./User");
const Show = require("./Show");
const Vote = require("./Vote");

// create associations
// User.hasMany(Movie, {
//   foreignKey: "user_id",
// });

// Movie.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

User.belongsToMany(Movie, {
  through: Vote,
  as: "voted_movies",
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Movie.belongsToMany(User, {
  through: Vote,
  as: "voted_movies",
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Vote.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Vote.belongsTo(Movie, {
  foreignKey: "movie_id",
  onDelete: "SET NULL",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Movie.hasMany(Vote, {
  foreignKey: "movie_id",
});

// Comment.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });

// User.hasMany(Comment, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Post.hasMany(Comment, {
//   foreignKey: "post_id",
// });

module.exports = { User, Movie, Vote, Show };
