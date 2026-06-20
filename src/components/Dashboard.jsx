import React from "react";
import ProgressBar from "./ProgressBar";

const Dashboard = ({
  totalTopics,
  completedTopics,
  score,
}) => {

  const progress =
    Math.round(
      (completedTopics / totalTopics) * 100
    ) || 0;

  return (
    <div className="dashboard">

      <div className="card">
        <h3>Total Topics</h3>
        <p>{totalTopics}</p>
      </div>

      <div className="card">
        <h3>Completed</h3>
        <p>{completedTopics}</p>
      </div>

      <div className="card">
        <h3>Score</h3>
        <p>{score}</p>
      </div>

      <div className="card">
        <h3>Progress</h3>
        <ProgressBar progress={progress}/>
      </div>

    </div>
  );
};

export default Dashboard;