import * as React from "react";
import "../style/MyContainer.css";
import Category from "./Category";
import { connect } from "react-redux";
import { addData } from "../redux_config/store";
import { Outlet } from "react-router";
import AddWidgetSidebar from "./AddWidgetSidebar";

const MyContainer = (props) => {
  function addWidgetHandler(e) {
    const sidebar = document.getElementById("widget-sidebar");
    sidebar.style.display = "block";

    const body = document.getElementsByTagName("body")[0];
    body.style.overflowY = "hidden";
  }

  return (
    <div className="mycontainer">
      <div className="container-header">
        <div className="h">
          <strong>CNAPP Dashboard</strong>
        </div>
        <div className="b">
          <button
            type="button"
            className=" add-widget-button"
            onClick={addWidgetHandler}
          >
            Add Widget +
          </button>
        </div>
      </div>
      <div>
        {props.filteredCategories == null
          ? props.categories.map((category, ind) => {
              return <Category category={category} key={ind} />;
            })
          : props.filteredCategories
              .filter((fcat) => {
                return fcat.widgets.length;
              })
              .map((fcat) => {
                return <Category category={fcat} />;
              })}
        {props.filteredCategories ? (
          !props.filteredCategories
            .map((cat) => cat.widgets.length)
            .reduce((total, x) => total + x) ? (
            <div body className="no-result">
              <div className="no-results">
                <strong className="text">NO RESULTS FOUND!!</strong>
              </div>
            </div>
          ) : null
        ) : null}
        <AddWidgetSidebar outlet={<Outlet />} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.category.categories.sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
    filteredCategories: state.filter.filteredCategories
      ? state.filter.filteredCategories.sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      : state.filter.filteredCategories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addJsonData: (data) => dispatch(addData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
