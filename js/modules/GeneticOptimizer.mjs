export default function GeneticOptimizer(options = {}) {
    options = Object.assign({}, {
        'maxPoolSize': 20,
        'lambda': 0.2,
        'maxGenerations': 200,
        'mutationRate': 0.1
    }, options);

    function calculateStress(individual, teams, previousRounds) {
        let stress = 0;
        for (let i = 0; i < individual.length / 2; i++) {
            const team1 = teams[individual[i * 2]];
            const team2 = teams[individual[i * 2 + 1]];
            // difference in strength is stress
            stress += Math.abs(team1.strength - team2.strength); // fixme: find formula for stress
            // same school is stress
            if (team1.school === team2.school) {
                stress += 50; // arbitrary value for same school stress
            }
            // same team in previous rounds is stress
            for (const round of previousRounds) {
                if (round.some(debate => (debate.team1.name === team1.name && debate.team2.name === team2.name) || (debate.team1.name === team2.name && debate.team2.name === team1.name))) {
                    stress += 50; // arbitrary value for repeated debates
                }
            }
        }
        return stress;
    }

    function shuffle(array) {
        const copy = array.slice();
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function generateRound(teams, previousRounds = []) {
        let pool = [];
        while (pool.length <= options.maxPoolSize) {
            pool.push(shuffle([...teams.keys()]));
        }

        let generation = 0;
        while (generation++ < options.maxGenerations) {
            pool.sort((a, b) => calculateStress(a, teams, previousRounds) - calculateStress(b, teams, previousRounds));
            console.log(`Generation ${generation}: Best individual stress = ${calculateStress(pool[0], teams, previousRounds)}`);
            pool = pool.slice(0, 1);
            // fill the pool with new individuals, mutated copies of the best individual
            while (pool.length < options.maxPoolSize) {
                const newIndividual = [...pool[0]];
                // mutate the new individual
                for (let i = 0; i < newIndividual.length; i++) {
                    if (Math.random() < options.mutationRate) {
                        // swap with a random gene
                        const index = Math.floor(Math.random() * newIndividual.length);
                        [newIndividual[i], newIndividual[index]] = [newIndividual[index], newIndividual[i]];
                    }
                }
                pool.push(newIndividual);
            }
        }
        const debates = [];
        for (let i = 0; i < pool[0].length / 2; i++) {
            debates.push({
                team1: teams[pool[0][i * 2]],
                team2: teams[pool[0][i * 2 + 1]]
            });
        }
        return debates;
    }

    return {
        generateRound
    };
}
