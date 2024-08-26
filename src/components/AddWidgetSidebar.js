import * as React from "react";
import "../style/AddWidgetSidebar.css";
import { Card, Col } from "reactstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { addData } from "../redux_config/store";
import { connect } from "react-redux";

const AddWidgetSidebar = (props) => {
  React.useEffect(() => {
    let navbar = document
      .getElementById("navbar-nav")
      .getElementsByTagName("a");

    if (navbar) {
      if (navbar.length) {
        for (let linkitem of navbar) {
          linkitem.click();
          break;
        }
      }
    }
  }, []);

  function cancelHandler(e) {
    const sidebar = document.getElementById("widget-sidebar");
    sidebar.style.display = "none";
  }

  function confirmHandler(e) {
    const sidebar = document.getElementById("widget-sidebar");
    sidebar.style.display = "none";

    let checkbokContainer = document.getElementById("select-active-widgets");
    let inputElements = checkbokContainer.getElementsByTagName("input");

    if (inputElements.length) {
      let categoryName = inputElements[0].id.split("-")[0];
      console.log("categoryName: ", categoryName);

      let categories = props.categories;
      console.log("categories: ", categories);

      let category = categories.filter((cat) => {
        return cat.name.toLowerCase() === categoryName.toLowerCase();
      })[0];

      let widgets = category["widgets"];

      let updatedCategory = {
        name: categoryName,
        widgets: [],
      };

      for (let item of inputElements) {
        let widgetName = item.id.split("-")[1];
        console.log("widgetName: ", widgetName);

        for (let i = 0; i < widgets.length; i++) {
          let widget = widgets[i];
          if (widgetName.toLowerCase() === widget.name.toLowerCase()) {
            widget.active = item.checked;
            updatedCategory.widgets.push(widget);
            break;
          }
        }
      }

      console.log("updatedCategory: ", updatedCategory);

      categories = categories.filter((cat) => {
        return cat.name.toLowerCase() !== categoryName.toLowerCase();
      });

      categories.push(updatedCategory);

      console.log("Categories: ", categories);

      props.addJsonData(categories);
    }
  }

  return (
    <div body className="widget-sidebar" id="widget-sidebar">
      <div className="sidebar-header">
        <h3 className="title">Add Widget</h3>
        <button type="button" className="cross-button" onClick={cancelHandler}>
          X
        </button>
      </div>
      <div className="subtitle">
        Personalise your dashboard by adding the following widget
      </div>

      <div className="sidebar-content">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <ul className="navbar-nav" id="navbar-nav">
            {props.categories.map((cat) => {
              return (
                <NavLink className="nav-link" to={cat.name} id={cat.name}>
                  {cat.name}
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="category-widgets">
        {props.outlet ? props.outlet : null}
      </div>
      <div className="sidebar-footer">
        <button
          type="button"
          className="confirm-button"
          onClick={confirmHandler}
        >
          Confirm
        </button>
        <button type="button" className="cancel-button" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.category.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addJsonData: (data) => dispatch(addData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWidgetSidebar);
