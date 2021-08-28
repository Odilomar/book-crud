const express = require("express");
const router = require("./routes");
const { json } = express;

const { config } = require("dotenv");

config();

const { PORT } = process.env;

const app = express();

app.use(json());

app.use("/status", (_, response) => {
  return response.json({ message: "API is running successfully!" });
});

app.use(router);

app.listen(PORT || 3000, () => {
  console.log("App listening on port 3000!");
});
