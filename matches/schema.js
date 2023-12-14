import mongoose from "mongoose";
const matchesSchema = new mongoose.Schema({
                                        date: {type: Date, required: true},
                                        player1: {type: String, required: true},
                                        player2: {type: String, required: true},
                                        player3: {type: String, required: true},
                                        player4: {type: String, required: true},
                                        score1: String,
                                        score2: String,
                                        score3: String,
                                    },
                                          {collection: "matches"})
export default matchesSchema;