import RandomGenerator from './RandomGenerator.mjs';
import GeneticOptimizer from './GeneticOptimizer.mjs';

export default function RoundController() {

    function generateRound(teams, previousRounds = []) {
        //const generator = RandomGenerator();
        const generator = GeneticOptimizer();
        return generator.generateRound(teams, previousRounds);
    }

    function playRound(round, teams) {
        for (const debate of round) {
            const totalStrength = debate.team1.strength + debate.team2.strength;
            const winner = Math.random() < debate.team1.strength / totalStrength ? "team1" : "team2";
            debate.winner = winner;
            teams[debate[winner].id].score += 1;
        }
        return round;
    }

    return {
        generateRound,
        playRound
    };
}
