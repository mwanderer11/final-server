import * as dao from "./dao"

function playerRoutes(app) {
    const createPlayer = async (req, res) => {
        const user = await dao.createPlayer(req.body);
        res.json(user);
    }
    const deletePlayer = async (req, res) => {
        const status = await dao.deletePlayer(req.params.playerId);
        res.json(status);
    }
    const findAllPlayers = async (req, res) => {
        const players = await dao.findAllPlayers();
        res.json(players);
    }
    const findPlayerByName = async (req, res) => {
        const player = await dao.findPlayerByName(req.params.name);
        res.json(player);
    }
    const findPlayerById = async (req, res) => {
        const player = await dao.findPlayerById(req.params.id);
        res.json(player);
    }
    const updatePlayer = async (req, res) => {
        const {playerId} = req.params;
        const status = await dao.updatePlayer(playerId, req.body);

    }
    app.post("/api/players", createPlayer());
    app.get("/api/players", findAllPlayers());
    app.get("/api/players/:playerId", findPlayerById());
    app.put("/api/player/:playerId", updatePlayer);
    app.delete("/api/players/:playerId", deletePlayer());
    app.post("/api/players/:playerName", findPlayerByName());
} export default playerRoutes;