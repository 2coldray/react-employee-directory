import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">Employee Directory</h1>
        <p className="lead text-center">
            Click the "Name" heading to sort the table alphabetically by heading or use the search box to search or filter the employees by name.
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
