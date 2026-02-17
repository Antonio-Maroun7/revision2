const express = require("express");
const clientRoutes = require("./routes/client.routes");

const app = express();
app.use(express.json());

app.use("/clients", clientRoutes);

module.exports = app;
