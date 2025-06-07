import TeamsController from './TeamsController.mjs';
import RoundController from './RoundController.mjs';

export default function DebatSim() {
    function init() {
        console.log("DebatSim module initialized");
    }

    function start() {
        const teamsController = TeamsController();
        const teams = teamsController.generateTeams();
        console.log("Teams generated:", teams);
        const roundsController = RoundController();
        const round = roundsController.generateRound(teams);
        console.log("Round generated:", round);
    }

    return {
        init,
        start
    }
}
