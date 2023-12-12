import mongoose from "mongoose";
import schema from "./schema.js"
const model = mongoose.model("matches", schema);

export default model;