import * as React from "react";
import "../style/HeaderMain.css";
import { MenuItem, Menu, Segment } from "semantic-ui-react";
import { Button } from "reactstrap";
import { addData } from "../redux_config/store";
import { connect } from "react-redux";

const HeaderMain = (props) => {
  const activeItem = "home";

  function searchHandler(e) {
    let searchBar = document.getElementById("search-widget");
    let searchWidget = searchBar.value;
  }

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
          id="search-widget"
        ></input>
        <button
          type="button"
          className="btn btn-light search-button"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.category.categories.sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addJsonData: (data) => dispatch(addData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMain);
