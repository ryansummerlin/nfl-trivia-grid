'use client';

export default function Page() {
    const makeAPICall = async() => {
        await fetch('/api/players', {
            method: 'GET'
        })
    }

    const getTeamName = async() => {
        await fetch('api/teamName', {
            method: 'GET'
        })
    }

    return (
        <main>
            <button onClick={makeAPICall}>Make api call</button>
            <button onClick={getTeamName}>get team name</button>
        </main>

        )
}
