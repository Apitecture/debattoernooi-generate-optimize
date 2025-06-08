export default function GeneticOptimizer(options = {}) {
    options = Object.assign({}, {
        'maxPoolSize': 20,
        'lambda': 0.2,
        'maxGenerations': 100,
        'mutationRate': 0.1
    }, options);

    function calculateStress(individual, teams) {
        let stress = 0;
        for (let i = 0; i < individual.length / 2; i++) {
            const team1 = teams[individual[i * 2]];
            const team2 = teams[individual[i * 2 + 1]];
            // difference in strength is stress
            stress += Math.abs(team1.strength - team2.strength);
            // same school is stress
            if (team1.school === team2.school) {
                stress += 50;
            }
        }
        return stress;
    }

    function generateRound(teams) {
        let pool = [];
        while (pool.length <= options.maxPoolSize) {
            pool.push((Object.keys(teams).map(Number).sort(() => Math.random() - 0.5)).slice(0, teams.length));
        }
        pool.sort((a, b) => calculateStress(a, teams) - calculateStress(b, teams));

        let generation = 0;
        while (generation++ < options.maxGenerations) {
            console.log(generation, calculateStress(pool[0], teams));
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
            pool.sort((a, b) => calculateStress(a, teams) - calculateStress(b, teams));
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
