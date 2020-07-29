const express = require ("express");
const app = express();
const { mongoose } = require("./db")
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", require("./server/route/routes.js"));

app.listen(port,(req,res)=>{
    console.log("Server Running");
});