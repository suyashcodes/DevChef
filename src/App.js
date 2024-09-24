import React from "react";
import LeaderboardTable from "./LeaderboardTable";

const App = () => {
  const leaderboardData = {
    models: [
      {
        hacker_id: 26308361,
        rank: 1,
        score: 51,
        time_taken: 47,
        hacker: "suyashdashputre7",
      },
      {
        hacker_id: 19431366,
        rank: 2,
        score: 5,
        time_taken: 226,
        hacker: "prathameshsatbh1",
      },
    ],
    page: 1,
    total: 2,
  };

  return (
    <div>
      <h1>Contest Leaderboard</h1>
      <LeaderboardTable data={leaderboardData} />
    </div>
  );
};

export default App;
