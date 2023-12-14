import express from 'express'
import "dotenv/config";
import cors from "cors";
import session from "express-session"
import "dotenv/config";
import mongoose from "mongoose";
import playerRoutes from "./Players/routes.js"
import UserRoutes from "./Users/routes.js";
import matchRoutes from "./matches/routes.js";

const CONNECTION_STRING = "mongodb+srv://maliawanderer:PokeMonroCks@roundnet.eq47vv5.mongodb.net/roundnet?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_STRING);
const app = express();
const db = mongoose.connection;
console.log(db);
app.use(cors({credentials: true,
                 origin: process.env.FRONTEND_URL}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
app.use(session(sessionOptions));

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(express.json());
playerRoutes(app);
UserRoutes(app);
matchRoutes(app);
app.listen(process.env.PORT || 4000);