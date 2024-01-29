const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jt1dbxy.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("DB connected"));

app.use("/api/user", userRoutes);
app.listen(PORT, console.log("server started"));
