import React, { useState } from "react";
import "./App.css"

const AdvancedJobCounter = () => {
  const [jobCounter, setJobCounter] = useState(1);

  const handleClickEvent = () => {
    setJobCounter(prev => prev + 1);
  };

  const handleSubEvent = () => {
    setJobCounter(prev => Math.max(0, prev - 1)); // prevents negative numbers
  };

  const handleResetEvent = () => {
    setJobCounter(0);
  };

  const getJobStatus = () => {
    if (jobCounter === 0) return "No jobs available";
    if (jobCounter >= 1 && jobCounter <= 5) return "Few jobs available";
    return "Many jobs available";
  };
  const resetBots =()=>{
    setJobCounter(0)
  }

  return (
  <div className="dashboard">
    <div className="card">
      <h1>Jobs: <span className="highlight">{jobCounter}</span></h1>
      <h2 className="status">{getJobStatus()}</h2>

      <div className="button-group">
        <button className="btn create" onClick={handleClickEvent}>
          Create Job
        </button>
        <button className="btn remove" onClick={handleSubEvent}>
          Remove Job
        </button>
        <button className="btn reset" onClick={handleResetEvent}>
          Reset
        </button>
      </div>

      <div className="stats">
        <p>Bots in UAT: <span>{jobCounter - 5}</span></p>
        <p>Jobs in Production: <span>{jobCounter + 10}</span></p>
        <button onClick={resetBots}>Reset Bots</button>
      </div>
    </div>
  </div>
);
}

export default AdvancedJobCounter;
