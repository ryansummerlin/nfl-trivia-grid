export async function GET() {
    const apiURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=1000&active=true';

    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data);


    return new Response(JSON.stringify(res));
}
