import * as dao from "./dao.js"

function matchRoutes(app) {
    const createMatch = async (req, res) => {
        const user = await dao.createMatch(req.body);
        res.json(user);
    }
    const deleteMatch = async (req, res) => {
        const {matchId} = req.params;
        const status = await dao.deleteMatch(matchId);
        res.json(status);
    }
    const findAllMatches = async (req, res) => {
        const matches = await dao.findAllMatches();
        res.json(matches);
    }
    const findMatchById = async (req, res) => {
        const { matchId } = req.params;
        const match = await dao.findMatchById(matchId);
        res.json(match);
    }
    const updateMatch = async (req, res) => {
        const {matchId} = req.params;
        const status = await dao.updateMatch(matchId, req.body);
        res.json(status);
    }
    app.post("/api/matches", createMatch);
    app.get("/api/matches", findAllMatches);
    app.get("/api/matches/:matchId", findMatchById);
    app.put("/api/matches/:matchId", updateMatch);
    app.delete("/api/matches/:matchId", deleteMatch);
} export default matchRoutes;