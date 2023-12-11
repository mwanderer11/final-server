import express from 'express'
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import playerRoutes from "./Players/routes.js"
import UserRoutes from "./Users/routes"

const CONNECTION_STRING = "mongodb"
mongoose.connect(CONNECTION_STRING);const app = express();
const db = mongoose.connection;
console.log(db);
app.use(cors());
app.use(express.json());
playerRoutes(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);