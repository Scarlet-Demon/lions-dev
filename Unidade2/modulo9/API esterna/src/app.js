const express = require('express')
const app = express();
const fichaRouter = require("./routers/fichaRouter")

app.use(express.json())
app.use("/fichas", fichaRouter)

module.exports = app