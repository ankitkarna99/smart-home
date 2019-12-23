const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", require("express-handlebars")());
app.set("view engine", "handlebars");

app.use(require("cookie-parser")());

app.use(express.static("./public"));

app.use("/", require("./routes/login"));
app.use("/command", require("./routes/commands"));
app.use(require("./handlers/errorHandlers").notFound);

module.exports = app;
