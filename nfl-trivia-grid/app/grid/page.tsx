'use client';
import React, { useState, Suspense, useEffect } from 'react';
import getNFLPlayerData from '@/app/lib/actions';
// import PlayerData from '@/app/ui/playerdata';
import { PlayerDataSkeleton } from '../ui/skeletons';

const teams = ["Team A", "Team B", "Team C"]; // Replace with actual NFL team names

const GridCell = ({ onClick, value }: { onClick: () => void; value: string }) => (
    <div className="grid-cell" onClick={onClick}>
      {value}
    </div>
  );


const PlayerData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlayerData = async () => {
            const apiURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=10&active=true';

            try {
                const response = await fetch(apiURL);
                const result = await response.json();
                setData(result);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }

        };

        fetchPlayerData();

    }, []);

    if (loading) {
        return <p>Loading...</p>;
      }

      if (error) {
        return <p>Error: {error}</p>;
      }

      return (
        <div>
          <h1>Data:</h1>
          <p>{data}</p>
        </div>
      );
}

export default function Page() {
  const [grid, setGrid] = useState(Array(3).fill(Array(3).fill('')));
  const [guessesRemaining, setGuessesRemaining] = useState(9);



  const handleCellClick = (row: number, col: number) => {
    // Handle logic when a grid cell is clicked
    // You can compare the selected player with the corresponding row and column teams
    // Update the grid and guesses remaining accordingly
    console.log(`row: ${row}`);
    console.log(`col: ${col}`);
  };

  return (
    <div className="container">
      <h1>NFL Trivia Grid</h1>
      <div className="grid">
        {grid.map((row, rowIndex) =>
          row.map((cell: string, colIndex: number) => (
            <GridCell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      <div className="counter">Guesses remaining: {guessesRemaining}</div>
      <PlayerData />
    </div>
  );
};
