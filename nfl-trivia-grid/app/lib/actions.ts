
export default async function getNFLPlayerData() {
    const apiURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=1000&active=true';

    const res = await fetch(apiURL);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
