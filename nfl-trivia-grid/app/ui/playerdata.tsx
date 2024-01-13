// import getNFLPlayerData from '@/app/lib/actions';
import { GET } from '@/app/playerdata/route';

export default async function PlayerData() {
    const data = await GET();

    return (
        <main>
            <p>{data}</p>
        </main>
    )
}
