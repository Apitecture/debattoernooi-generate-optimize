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
        let previousRounds = [];
        for (let i = 1; i <= 4; i++) {
            const roundController = RoundController();
            let round = roundController.generateRound(teams, previousRounds);
            console.log(`Round ${i} generated:`, round);
            round = roundController.playRound(round, teams);
            console.log(`Round ${i} result:`, round);
            previousRounds.push(round);
        }
    }

    return {
        init,
        start
    }
}
