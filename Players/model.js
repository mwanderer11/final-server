import mongoose from "mongoose";
import schema from "./schema.js"
const model = mongoose.model("players", schema);

export default model;