require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

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

// Listning to port
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
