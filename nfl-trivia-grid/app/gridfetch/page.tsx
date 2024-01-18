'use client';

import { getTeamData } from '@/actions/getTeamData';
// import { teamData } from '@/app/lib/data';


export default async function Page() {
    const makeAPICall = async() => {
        await fetch('/api/players', {
            method: 'GET'
        })
    }

    const getTeamName = async() => {
        await fetch('/api/getTeamName', {
            method: 'GET'
        })
    }

    // const teamData = await getTeamData({teamId: 1});
    // const data = teamData;

    return (
        <main>
            <button onClick={makeAPICall}>Make api call</button>
            <button onClick={getTeamName}>get Team Name</button>
            {/* <p>{data.name}</p> */}
        </main>

        )
}
