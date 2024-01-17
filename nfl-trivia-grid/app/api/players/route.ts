export async function GET() {
    const apiURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=1000&active=true';
    const teamURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32';


    const res = await fetch(teamURL);
    const data = await res.json();
    console.log(data);

    const playerData = {
        count: data.count,
        items: data.items
    }

    console.log(playerData.items[0]);


    return new Response(JSON.stringify(res));
}
