const router = require("express").Router();
const { Movie, User } = require("../../models");

// get all movies
router.get("/", (req, res) => {
  Movie.findAll({
    // attributes: { exclude: ["password"] },
  })
    .then((dbMovieData) => res.json(dbMovieData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Movie.findOne({
    // attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
      // {
      //   model: Vote,
      //   attributes: ["id", "comment_text", "movie_id"],
      //   include: {
      //     model: User,
      //     attributes: ["user_id"],
      //   },
      // },
      // {
      //   model: Post,
      //   attributes: ["title"],
      //   through: Vote,
      //   as: "voted_posts",
      // },
    ],
  })
    .then((dbMovieData) => {
      if (!dbMovieData) {
        res.status(404).json({ message: "No movie found with this id" });
        return;
      }
      res.json(dbMovieData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.post("/", (req, res) => {
//   // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
//   Movie.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//   })
//     .then((dbMovieData) => {
//       req.session.save(() => {
//         req.session.user_id = dbMovieData.id;
//         req.session.username = dbMovieData.username;
//         req.session.loggedIn = true;

//         res.json(dbMovieData);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
