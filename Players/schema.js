import mongoose from "mongoose";
const playersSchema = new mongoose.Schema( {
                                           id: {type: String, required: true },
                                           name: {type: String, required: true},
                                           ranking: String,
                                       },
                                       {collection: "players"})
export default playersSchema;