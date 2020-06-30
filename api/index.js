const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const { api } = require("../config");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

// Routing
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(api.port, () => {
  console.log(`API escuchando en el puerto ${api.port}`);
});
