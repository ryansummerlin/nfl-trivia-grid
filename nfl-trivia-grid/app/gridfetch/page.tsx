'use client';

export default function Page() {
    const makeAPICall = async() => {
        await fetch('/api/players', {
            method: 'GET'
        })
    }

    return <button onClick={makeAPICall}>Make api call</button>
}
