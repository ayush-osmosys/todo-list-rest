const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
require("dotenv").config();
const task = require("./routes/task");
const app = express();
const pool = require("./db");

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors);
app.listen(PORT, () => console.log("Server started at port " + PORT));

app.use(task);
