const sequelize = require("../config/connection");
const { User, Movie } = require("../models");
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

const userData = [
  {
    username: "alesmonde0",
    email: "nwestnedge0@cbc.ca",
    password: "password123",
  },
  {
    username: "jwilloughway1",
    email: "rmebes1@sogou.com",
    password: "password123",
  },
];

module.exports = seedUsers;
