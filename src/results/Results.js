import React from "react";
import "./results.css";

const Results = ({ results }) => {
  return (
    <div className="results">
      <h4>{results.symbol}</h4>
      <p>{results.title}</p>
    </div>
  );
};

export default Results;
