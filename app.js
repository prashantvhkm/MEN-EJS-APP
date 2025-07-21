const connentDB = require("./db/db");
const express = require("express");
const router = require("./router/rout");

connentDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", router);

app.listen(4000, () => {
  console.log("server is runing");
});
