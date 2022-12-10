require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");
const pollRoutes = require("./routes/poll");

// App initialization
const app = express();

const PORT = process.env.PORT || 4000;

// Database connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB CONNECTED!`);
  });

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1", authRoutes);
app.use("/api/v1", pollRoutes);

app.get("/api/v1/ping", (req, res) => {
  res.send({message: "Success"})
})

// Listning to port
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

module.exports = app