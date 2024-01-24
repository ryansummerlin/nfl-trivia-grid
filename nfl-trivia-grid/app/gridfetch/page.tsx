'use client';

// import { getTeamData } from '@/actions/getTeamData';
// import { teamData } from '@/app/lib/data';
// import { teamNamesJson } from '@/app/lib/data';
import TeamList from '@/app/teamList/page';


export default async function Page() {
    // let teamNames: Team[] = [];
    // let textDecoder = new TextDecoder('utf-8');

    interface Team {
        name: string,
        id: string
    }

    // console.log(firstTeam);

    const makeAPICall = async() => {
        await fetch('/api/players', {
            method: 'GET'
        })
    }

    // const getTeamName = async() => {
    //     await fetch('/api/getTeamName', {
    //         method: 'GET'
    //     }).then((res) => {
    //         return res.body.getReader().read();
    //     }).then(({ value, done}) => {
    //         teamNames = JSON.parse(textDecoder.decode(value));
    //         console.log(teamNames);
    //     })
    //     console.log(`teamNames: ${teamNames[0].name}`);
    // }

    // const teamData = await getTeamData({teamId: 1});
    // const data = teamData;
    // const testTeam = teamNames[0].name;



    return (
        <main>
            <button onClick={makeAPICall}>Make api call</button>
            {/* <button onClick={getTeamName}>get Team Name</button> */}
            {/* <p>{testTeam}</p> */}
            <TeamList />
        </main>

        )
}
