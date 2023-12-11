import model from "./model.js";
export const createPlayer = (player) => model.create(player);
export const findAllPlayers = () => model.find();
export const findPlayerById = (playerId) => model.findById(playerId);
export const findPlayerByName = (name) =>
    model.findOne({ Name: name });
export const updatePlayer = (playerId, player) =>
    model.updateOne({ id: playerId }, { $set: player });
export const deletePlayer = (playerId) => model.deleteOne({ id: playerId });