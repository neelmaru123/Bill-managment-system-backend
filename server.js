require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const path = require("path");
// const handleNewUser = require("./controllers/signupController");
const handleLogin = require("./controllers/loginController");

const cors = require("cors");

const mongoose = require("mongoose");
const connectDB = require("./config/dbConnection");

const PORT = process.env.PORT || 3500;

//connect to mongoDB
connectDB();

//cross-origin resource sharer
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "public")));

// app.post("/signup", handleNewUser);

app.post("/login", handleLogin);

app.use("/bill", require("./routes/bill"));
app.use("/expense", require("./routes/expense"));

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
