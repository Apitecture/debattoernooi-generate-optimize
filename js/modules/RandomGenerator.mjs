export default function GeneticOptimizer(options = {}) {
    options = Object.assign({}, {
        'maxPoolSize': 20,
        'maxGenerations': 100,
        'mutationRate': 0.1
    }, options);
    
    function generateRound(teams) {
        const debates = [];
        const shuffledTeams = teams.sort(() => Math.random() - 0.5);
        const numDebates = Math.floor(shuffledTeams.length / 2);
        for (let i = 0; i < numDebates; i++) {
            const team1 = shuffledTeams[i * 2];
            const team2 = shuffledTeams[i * 2 + 1];
            debates.push({
                team1: team1,
                team2: team2
            });
        }
        return debates;
    }

    return {
        generateRound
    };
}
