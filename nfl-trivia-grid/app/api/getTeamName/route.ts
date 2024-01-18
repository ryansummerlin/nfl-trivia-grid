export async function GET() {
    const teamsURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32';

    const allTeamsRes = await fetch(teamsURL);
    const allTeamsData = await allTeamsRes.json();
    console.log(allTeamsData);

    const teamData = {
        items: allTeamsData.items
    }


    const teamsByAPIEndpoint = teamData.items;
    console.log(teamsByAPIEndpoint);
    const teams = [];

    for (let i = 0; i < teamsByAPIEndpoint.length; i++) {
        const item = teamsByAPIEndpoint[i];
        const teamAPIEndpoint = item.$ref;
        const individualTeamInfo = await fetch(teamAPIEndpoint).then(res => res.json());
        teams.push({
            name: individualTeamInfo.name,
            id: individualTeamInfo.id
        })
    }

    console.log(teams);


    return new Response(JSON.stringify(allTeamsData));
}
