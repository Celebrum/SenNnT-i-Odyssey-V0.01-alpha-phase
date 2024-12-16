import React, { useState, useEffect } from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ userProgress }) => {
  const [progress, setProgress] = useState(userProgress);

  useEffect(() => {
    setProgress(userProgress);
  }, [userProgress]);

  const calculateProgress = () => {
    const totalTasks = progress.length;
    const completedTasks = progress.filter(task => task.completed).length;
    return (completedTasks / totalTasks) * 100;
  };

  const renderProgress = () => {
    return progress.map((task, index) => (
      <div key={index} className={`task ${task.completed ? 'completed' : ''}`}>
        <span>{task.name}</span>
        <span>{task.completed ? 'Completed' : 'Incomplete'}</span>
      </div>
    ));
  };

  return (
    <div className="progress-tracker">
      <h2>Progress Tracker</h2>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
      <div className="progress-details">{renderProgress()}</div>
    </div>
  );
};

export default ProgressTracker;
