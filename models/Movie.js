const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Movie model
// class Movie extends Model {
//   static upvote(body, models) {
//     return models.Movie.create({
//       user_id: body.user_id,
//       movies_id: body.movies_id,
//     }).then(() => {
//       return Movie.findOne({
//         where: {
//           id: body.post_id,
//         },
//         attributes: [
//           "id",
//           "post_url",
//           "title",
//           "created_at",
//           [
//             sequelize.literal(
//               "(SELECT COUNT(*) FROM vote WHERE Movie.id = vote.post_id)"
//             ),
//             "vote_count",
//           ],
//         ],
//         include: [
//           {
//             model: models.Comment,
//             attributes: [
//               "id",
//               "comment_text",
//               "post_id",
//               "user_id",
//               "created_at",
//             ],
//             include: {
//               model: models.User,
//               attributes: ["username"],
//             },
//           },
//         ],
//       });
//     });
//   }
// }

// create fields/columns for Movie model
class Movie extends Model {}
Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    release: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validtae: {
        len: [4],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "movie",
  }
);

module.exports = Movie;
