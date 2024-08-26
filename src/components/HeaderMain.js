import * as React from "react";
import "../style/HeaderMain.css";
import { MenuItem, Menu, Segment } from "semantic-ui-react";
import { Button } from "reactstrap";

const HeaderMain = (props) => {
  const activeItem = "home";

  return (
    <div className="myheader">
      <div className="path">
        <h6 className="main-heading">Home &gt; Dashboard</h6>
      </div>
      <div className="features">
        <input
          className=" mr-sm-2 searchbar"
          type="search"
          placeholder="Search Widget..."
          aria-label="Search"
        ></input>
        <button type="button" className="btn btn-light search-button">
          Search
        </button>


      </div>
    </div>
  );
};

export default HeaderMain;
