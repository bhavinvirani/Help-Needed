//? import modules
require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");

const colors = require("colors");
const logger = require("morgan");

const connectDB = require("./DB/ConnectDB");


//? app
const app = express();
connectDB();

//? middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // access JSON data

app.use(logger("dev"));
app.use(helmet());
// app.use(cors({ origin: true, credentials: true }));
app.use(cors());

//? routes
app.use("/", require("./API/routes"))
// 404
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));


//? port
const port = process.env.PORT || 8080;
//? listener
app.listen(port, () =>
  console.log(`Server started on PORT ${port}`.yellow.bold)
);
