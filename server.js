const Sequelize = require("./config/connection");
const express = require("express");
const routes = require("./controllers");
const path = require("path");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

const session = require("express-session");
const { sequelize } = require("./models/Post");

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const SequelizeStore = require("connect-session-sequelize")(session.Store);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// For use of all files in the Public dir
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(routes);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// turn on connection to db and server
Sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

app.use(session(sess));
