import express from 'express';
import connectDB from './config/db.js';
import workshopsRouter from "./routers/workshopsRouter.js";
import vehiclesRouter from "./routers/vehiclesRouter.js";
import maintenanceRouter from "./routers/maintenanceRouter.js";


connectDB()

const app = express()
app.use(express.json())

app.use('/workshops', workshopsRouter)
app.use('/vehicles', vehiclesRouter)
app.use('/maintenance', maintenanceRouter)

app.listen(6000, () => console.log('Servidor Online na Porta 6000'))
