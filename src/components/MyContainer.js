import * as React from "react";
import "../style/MyContainer.css";
import Category from "./Category";
import { connect } from "react-redux";
import { addData } from "../redux_config/store";
import { Outlet } from "react-router";
import AddWidgetSidebar from "./AddWidgetSidebar";
import { Col } from "reactstrap";
import EmptyWidget from "./EmptyWidget";
import {Card, Row} from "reactstrap";

const MyContainer = (props) => {
  // React.useEffect(() => {
  //   console.log(props.categories);
  // }, []);

  if (props.filteredCategories) {
    console.log(
      "sum: ",
      props.filteredCategories
        .map((cat) => cat.widgets.length)
        .reduce((total, x) => total + x)
    );
  }

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
        {props.filteredCategories == null
          ? props.categories.map((category) => {
              return <Category category={category} />;
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
            <Card body className="category-card border-light">
              <Row sm="12" className="category-row no-result">
                <Col sm="4" className="wid">
                  <h1>NO RESULTS FOUND!!</h1>
                </Col>
              </Row>
            </Card>
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
