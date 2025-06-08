import RandomGenerator from './RandomGenerator.mjs';
import GeneticOptimizer from './GeneticOptimizer.mjs';

export default function RoundController() {

    function generateRound(teams) {
        //const generator = RandomGenerator();
        const generator = GeneticOptimizer();
        return generator.generateRound(teams);
    }

    function playRound(round) {
        for (const debate of round) {
            const totalStrength = debate.team1.strength + debate.team2.strength;
            const winner = Math.random() < debate.team1.strength / totalStrength ? "team1" : "team2";
            debate.winner = winner;
        }
        return round;
    }

    return {
        generateRound,
        playRound
    };
}
