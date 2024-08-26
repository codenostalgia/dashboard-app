import * as React from "react";
import "../style/MyContainer.css";
import Category from "./Category";
import { connect } from "react-redux";
import { addData } from "../redux_config/store";
import { Outlet } from "react-router";
import AddWidgetSidebar from "./AddWidgetSidebar";

const MyContainer = (props) => {
  // React.useEffect(() => {
  //   console.log(props.categories);
  // }, []);

  function addWidgetHandler(e) {
    const sidebar = document.getElementById("widget-sidebar");
    sidebar.style.display = "block";
  }

  return (
    <div className="mycontainer">
      <div>
        <h1 className="dashboard-heading">CNAPP Dashboard 1</h1>
        <button
          type="button"
          className="btn btn-light add-widget-button"
          onClick={addWidgetHandler}
        >
          Add Widget +
        </button>
      </div>
      <div>
        {props.categories.map((category) => {
          return <Category category={category} />;
        })}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addJsonData: (data) => dispatch(addData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
