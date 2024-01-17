export async function GET() {
    const teamID = 1;
    const teamURL = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamID}`

    const res = await fetch(teamURL);
    const data = await res.json();
    console.log(data);

    const teamData = {
        name: data.team.name,
        id: teamID
    }

    console.log(teamData);


    return new Response(JSON.stringify(res));
}
