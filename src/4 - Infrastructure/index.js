const express = require("express");
const { json } = express;

const config = require("dotenv");
config();

const { PORT } = process.env;

const app = express();

app.use(json());

app.listen(PORT || 3000, () => {
  console.log("App listening on port 3000!");
});
