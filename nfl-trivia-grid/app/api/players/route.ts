// export async function GET() {
//     const apiURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=1000&active=true';
//     // const teamURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32';


//     const res = await fetch(apiURL);
//     const data = await res.json();
//     console.log(data);

//     const playerData = {
//         count: data.count,
//         items: data.items
//     }

//     console.log(playerData.items[0]);


//     return new Response(data);
// }


export async function GET() {
    const apiURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=100&active=true';
    // const teamURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32';


    const allPlayersRes = await fetch(apiURL).then(res => res.json());

    const items = allPlayersRes.items;
    // console.log(items);
    const players = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const playerEndpoint = await fetch(item.$ref).then(res => res.json());
        const playerInfo = {
            id: playerEndpoint.id,
            name: playerEndpoint.fullName
        }
        players.push(playerInfo);
    }

    // console.log(players);

    return new Response(JSON.stringify(players));
}
