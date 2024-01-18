'use client';

import { getTeamData } from '@/actions/getTeamData';



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

    const teamData = await getTeamData({id: 1});

    return (
        <main>
            <button onClick={makeAPICall}>Make api call</button>
            <button onClick={getTeamName}>get Team Name</button>
        </main>

        )
}
