const express = require("express");
const cors =require("cors")
const route= require("./src/routes");

const app = express();

const PORT= 8000

app.use(cors());
app.use(express.json());
app.use(route);

app.listen(PORT,()=>console.log("server is running"));

