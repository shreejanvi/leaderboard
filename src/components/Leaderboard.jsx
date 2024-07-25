import React from 'react';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const scores = useSelector((state) => state.scores);

  // Reverse the scores array to display in descending order
  const reversedScores = [...scores].reverse();

  return (
    <div className="leaderboard">
      <h1>Top 10 Scores on Leader Board</h1>
      <ul>
        {reversedScores.map((score, index) => (
          <li key={index}>
            <strong>{score.username}</strong> - {score.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
