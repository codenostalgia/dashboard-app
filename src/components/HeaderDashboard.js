import * as React from "react";
import "../style/HeaderDashboard.css";
import { addData } from "../redux_config/store";
import { connect } from "react-redux";
import filterData from "../redux_config/filteredCategory/filterAction";

const HeaderDashboard = (props) => {

  function searchChangeHandler(e) {
    let searchBar = document.getElementById("search-widget");
    let searchWidget = searchBar.value;

    if (searchWidget === "") {
      props.filterCategories(null);
      return;
    }

    let origionalCategories = props.categories;

    let filteredCategories = origionalCategories.map((cat) => {
      let filteredWidgets = cat.widgets.filter((wid) => {
        return (
          wid.name.toLowerCase().includes(searchWidget.toLowerCase()) &&
          wid.active
        );
      });

      let updatedCat = {
        name: cat.name,
        widgets: filteredWidgets,
      };
      return updatedCat;
    });
    props.filterCategories(filteredCategories);
  }

  return (
    <div className="myheader">
      <div className="path">
        <a href="/" className="header-links">
          Home
        </a>{" "}
        &gt;{" "}
        <a href="#" className="header-links">
          Dashboard
        </a>
      </div>
      <div className="features">
        <input
          className="form-control form-input searchbar"
          type="search"
          placeholder="Search Widget..."
          aria-label="Search"
          id="search-widget"
          onChange={searchChangeHandler}
        ></input>
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
    filterCategories: (data) => dispatch(filterData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDashboard);
