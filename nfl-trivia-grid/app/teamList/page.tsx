
import { Team } from '@/app/lib/definitions';


const fetchTeamNames = async (): Promise<Team[]> => {

    let teamNames: Team[] = [];
    let textDecoder = new TextDecoder('utf-8');

    // interface Team {
    //     name: string,
    //     id: string
    // }

    const getTeamName = async() => {
        await fetch('/api/getTeamName', {
            method: 'GET'
        }).then((res) => {
            return res.body.getReader().read();
        }).then(({ value, done}) => {
            teamNames = JSON.parse(textDecoder.decode(value));
            console.log(teamNames);
            return teamNames;
        })
    }

    getTeamName();

    return teamNames;
}

const teamNames = await fetchTeamNames();
const firstTeam = teamNames[0].name;
const teamNamesJson = JSON.stringify(teamNames);

// export { teamNamesJson };

export default function TeamList() {
    return (
        <div>{firstTeam}</div>
    )
}
