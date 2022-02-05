const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const movieRoutes = require("./movie-routes");
// const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/movies", movieRoutes);
// router.use("/comments", commentRoutes);

module.exports = router;
