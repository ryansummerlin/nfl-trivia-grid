'use server'

export const getTeamData = async ({
    id
  }: {
    id: number
  }) => {
    const data = await fetch(
        `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams/?limit=32`
    )
    if (!data.ok) {
      throw new Error("Failed to fetch data")
    }

    // const teamData = {
    //     name: data.name,
    //     id: data.id
    // }

    return data;
  }
