import mongoose from "mongoose";
const playersSchema = new mongoose.Schema({
                                           name: {type: String, required: true},
                                           id: {type: String, required: true },
                                           ranking: String,
                                       },
                                       {collection: "players"})
export default playersSchema;