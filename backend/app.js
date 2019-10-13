const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");

const morraGameRouter = require("./router/morraGame");
const trianglesRouter = require("./router/triangles");
const leapYearRouter = require("./router/leapYear");
const converterLettersRouter = require("./router/converterWords");
const arrayOrderedRouter = require("./router/arrayOrdered");
const palindromeWordsRouter = require("./router/palindromeWords");
const minAndMaxRouter = require("./router/minAndMax");
// mongoose.connect("mongodb+srv://corrado:yhhGomWiaUGUNX9I@cluster0-f6xao.mongodb.net/social-network?retryWrites=true&w=majority")
//   .then(() => {
//     console.log("Connected to database")
//   })
//   .catch(() => {
//     console.log("Connection failed")
//   })

const app = express();

app.use(bodyParse.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/morra", morraGameRouter);
app.use("/api/triangles", trianglesRouter);
app.use("/api/leapYear", leapYearRouter);
app.use("/api/converter", converterLettersRouter);
app.use("/api/arrayOrdered", arrayOrderedRouter);
app.use("/api/palindromeWords", palindromeWordsRouter);
app.use("/api/minAndMax", minAndMaxRouter);

module.exports = app;
