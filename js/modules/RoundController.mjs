import RandomGenerator from './RandomGenerator.mjs';
import GeneticOptimizer from './GeneticOptimizer.mjs';

export default function RoundController() {

    function generateRound(teams) {
        //const generator = RandomGenerator();
        const generator = GeneticOptimizer();
        return generator.generateRound(teams);
    }

    return {
        generateRound
    };
}
