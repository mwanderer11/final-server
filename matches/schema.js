import mongoose from "mongoose";
const matchesSchema = new mongoose.Schema({
                                        id: {type: String, required: true},
                                        player1: {type: String, required: true},
                                        player2: {type: String, required: true},
                                        player3: {type: String, required: true},
                                        player4: {type: String, required: true},
                                    },
                                          {collection: "matches"})
export default matchesSchema;