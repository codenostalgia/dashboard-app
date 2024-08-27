import * as React from "react";
import "../style/Error.css";

const Error = (props) => {
  return (
    <div className="error-page">
      <h1>SOME ERROR HAPPENED :/</h1>
      <button className="home-button btn btn-primary btn-lg">
        <a href="/" className="home-link">
          Home
        </a>
      </button>
    </div>
  );
};

export default Error;
