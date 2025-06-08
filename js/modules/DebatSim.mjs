import TeamsController from './TeamsController.mjs';
import RoundController from './RoundController.mjs';

export default function DebatSim() {
    function init() {
        console.log("DebatSim module initialized");
    }

    function start() {
        const teamsController = TeamsController();
        const teams = teamsController.generateTeams(); // Generate random teams with random strengths
        console.log("Teams generated:", teams);
        const roundController = RoundController();
        let round = roundController.generateRound(teams); // Generate a round of debates
        console.log("Round generated:", round);
        round = roundController.playRound(round); // Play the round of debates
        console.log("Round result:", round);
        // Now we need to generate the next round of debates, based on the results of the previous round
    }

    return {
        init,
        start
    }
}
