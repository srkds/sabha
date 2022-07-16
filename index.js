require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
