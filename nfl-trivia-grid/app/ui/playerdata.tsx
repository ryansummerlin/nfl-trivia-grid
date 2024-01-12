import getNFLPlayerData from '@/app/lib/actions';

export default async function PlayerData() {
    const data = await getNFLPlayerData();

    return (
        <main>
            <p>{data}</p>
        </main>
    )
}
