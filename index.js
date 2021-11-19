const express = require("express");
const app = express();
const mongoose = require("mongoose"); // completar 
require('dotenv').config();
const Conn = require("./model/conn/index");

app.use(express.json());

Conn ();

app.get("/", (req, res) => {
    res.status(200).json({message: "API RODANDO OK"})
});

const paisRouter = require("./routers/pais.routes");
app.use("/pais", paisRouter);

const estadoRouter = require("./routers/estado.routes");
app.use("/estado", estadoRouter);

const cidadeRouter = require("./routers/cidade.routes");
app.use("/cidade", cidadeRouter);

app.listen (process.env.PORT, () => {
    console.log(`API usando a porta ${process.env.PORT}`);
});