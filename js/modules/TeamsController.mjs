export default function TeamsController() {

    /* middle school names in Dutch */
    const schoolNames = [
        "Oranje Nassau College",
        "Stedelijk Gymnasium",
        "Gymnasium Apeldoorn",
        "Gemeentelijk Lyceum",
        "Herman Broerenschool",
        "Sint Maartenscollege",
        "De Nieuwe School",
        "Montessori Lyceum",
        "Vossius Gymnasium",
        "Sint-Janscollege"
    ];
    const maxTeamsPerSchool = 5;

    function generateTeams() {
        const teams = [];
        for (var schoolName of schoolNames) {
            const numTeams = Math.floor(Math.random() * maxTeamsPerSchool) + 1;
            for (let i = 0; i < numTeams; i++) {
                teams.push({
                    id: teams.length,
                    name: `${schoolName} ${i + 1}`,
                    school: schoolName,
                    strength: Math.floor(Math.random() * 60) + 40,
                    score: 0
                });
            }
        }
        // Create an extra team if the number of teams is odd
        // This is to ensure that there is always an even number of teams for pairing in debates
        if (teams.length % 2) teams.push({
            id: teams.length,
            name: "Extra Team",
            school: "DebatUnie",
            strength: Math.floor(Math.random() * 60) + 40,
            score: 0
        });
        return teams;
    }

    return {
        generateTeams
    };
}
