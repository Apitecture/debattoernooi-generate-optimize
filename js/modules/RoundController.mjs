export default function RoundController() {

    function generateRandomDebates(teams) {
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

    function generateMinFrictionDebates(teams) {
        const debates = [];
        const sortedTeams = teams.sort((a, b) => a.strength - b.strength);
        const numDebates = Math.floor(sortedTeams.length / 2);
        for (let i = 0; i < numDebates; i++) {
            const team1 = sortedTeams[i * 2];
            const team2 = sortedTeams[i * 2 + 1];
            debates.push({
                team1: team1,
                team2: team2
            });
        }
        return debates;
    }

    function generateRound(teams) {
        //return generateRandomDebates(teams);
        return generateMinFrictionDebates(teams);
    }

    return {
        generateRound
    };
}
