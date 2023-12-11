import model from "./model.js";
export const createMatch = (match) => model.create(match);
export const findAllMatches = () => model.find();
export const findMatchById = (matchId) => model.findById(matchId);
export const updateMatch = (matchId, match) =>
    model.updateOne({ id: matchId }, { $set: match });
export const deleteMatch = (matchId) => model.deleteOne({ id: matchId });