import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">Employee Directory</h1>
        <p className="lead text-center">
            Click on name the name heading to filter by heading or use the search box to narrow your results.
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
