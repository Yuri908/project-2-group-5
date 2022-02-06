const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Movie } = require("../models");
const withAuth = require("../utils/auth");

// // get all movies for homepage
router.get("/", withAuth, (req, res) => {
  console.log(re.session);
  console.log("======================");
  Movie.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "title",
      "post_url",
      "release",
      [sequelize.literal("(SELECT * FROM movie)")],
    ],
    // include: [
    //   {
    //     model: Vote,
    //     attributes: ["id", "comment_text", "movie_id", "user_id", "created_at"],
    //     include: {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   },
    //   {
    //     model: User,
    //     attributes: ["username"],
    //   },
    // ],
  })
    .then((dbMovieData) => {
      const movies = dbMovieData.map((movie) => movie.get({ plain: true }));

      res.render("homepage", {
        movies,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // get single movie
router.get("/movie/:id", (req, res) => {
  Movie.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "post_url",
      "title",
      "release",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM movie WHERE movie.id = movie.id)"
        ),
      ],
      // include: [
      //   {
      //     model: User,
      //     attributes: ["id", "username", "post_id", "user_id", "created_at"],
      //     include: {
      //       model: User,
      //       attributes: ["username"],
      //     },
      //   },
      //   {
      //     model: User,
      //     attributes: ["username"],
      //   },
    ],
  })
    .then((dbMovieData) => {
      if (!dbMovieData) {
        res.status(404).json({ message: "No movie found with this id" });
        return;
      }

      const movie = dbMovieData.get({ plain: true });

      res.render("single-movie", {
        movie,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
