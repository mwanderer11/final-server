import express from 'express'
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import PlayerRoutes from "./Players/routes"
import UserRoutes from "./Users/routes"

const CONNECTION_STRING = "mongodb"
mongoose.connect(CONNECTION_STRING);const app = express();
const db = mongoose.connection;
app.use(cors());
app.use(express.json());
PlayerRoutes(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);