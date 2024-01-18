'use server'

export const getTeamData = async ({
    teamId
  }: {
    teamId: number
  }) => {
    const data = await fetch(
        `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams/${teamId}`
    ).then(res => res.json())
    if (!data.ok) {
      throw new Error("Failed to fetch data")
    }

    const teamData = {
        name: data.name,
        id: data.id
    }

    console.log(teamData);

    return teamData;
  }
