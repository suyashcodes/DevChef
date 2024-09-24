import React from "react";

const LeaderboardTable = ({ data }) => {
  // Sort the data by score in descending order
  const sortedData = data.models.sort((a, b) => b.score - a.score);

  return (
    <div>
      <h2>Leaderboard</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
            <th>Time Taken (s)</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.hacker}</td>
              <td>{entry.score}</td>
              <td>{entry.time_taken}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
