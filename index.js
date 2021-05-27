const express = require("express");
const app = express();
const { mongoose } = require("./db");
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(express.json());
app.options('*', cors())

app.use("/", require("./server/route/routes.js"));

app.listen(port, (req, res) => {
    console.log("Server Running");
});