import express from "express"
import "dotenv/config";
import user_router from "./routes/user-route";
import filme_router from "./routes/filme-route";
import scheduling_router from "./routes/scheduling-route";

const app = express()

app.use(express.json())

app.use("/user", user_router)
app.use("/filme", filme_router)
app.use("/scheduling", scheduling_router)

app.listen(process.env.API_PORT, () => console.log("Servidor filme executando na porta " + process.env.API_PORT))