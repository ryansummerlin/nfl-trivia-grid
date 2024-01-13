export async function GET() {
    const apiURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=1000&active=true';

    const res = await fetch(apiURL);
    console.log(res);

    return new Response(JSON.stringify(res));
}
