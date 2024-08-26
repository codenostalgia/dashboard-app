import * as React from "react";
import "../style/HeaderMain.css";
import { MenuItem, Menu, Segment } from "semantic-ui-react";
import { Button } from "reactstrap";
import { addData } from "../redux_config/store";
import { connect } from "react-redux";
import filterData from "../redux_config/filteredCategory/filterAction";

const HeaderMain = (props) => {
  const activeItem = "home";

  function searchChangeHandler(e) {
    let searchBar = document.getElementById("search-widget");
    let searchWidget = searchBar.value;

    if (searchWidget == '') {
      console.log("its empty");
      
      props.filterCategories(null)
      return;
    }

    console.log("origional data before: ", props.categories);

    let origionalCategories = props.categories;

    let filteredCategories = origionalCategories.map((cat) => {
      console.log("cat: ", cat);

      let filteredWidgets = cat.widgets.filter((wid) => {
        console.log(
          wid.name.toLowerCase().includes(searchWidget.toLowerCase()) &&
            wid.active
        );

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

    console.log("origional data after: ", props.categories);
    console.log("filteredCategories : ", filteredCategories);

    props.filterCategories(filteredCategories);
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
          onChange={searchChangeHandler}
        ></input>
        {/* <button
          type="button"
          className="btn btn-light search-button"
          onClick={searchHandler}
        >
          Search
        </button> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMain);
