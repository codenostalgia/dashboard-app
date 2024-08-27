import * as React from "react";
import "../style/AddWidgetSidebar.css";
import { NavLink } from "react-router-dom";
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

    document
      .getElementById("widget-block-region")
      .addEventListener("click", () => {
        cancelHandler();
      });
  }, []);

  function cancelHandler(e) {
    const sidebar = document.getElementById("widget-sidebar");
    sidebar.style.display = "none";

    const body = document.getElementsByTagName("body")[0];
    body.style.overflowY = "visible";
  }

  function confirmHandler(e) {
    const sidebar = document.getElementById("widget-sidebar");
    sidebar.style.display = "none";

    const body = document.getElementsByTagName("body")[0];
    body.style.overflowY = "visible";

    let checkbokContainer = document.getElementById("select-active-widgets");
    let inputElements = checkbokContainer.getElementsByTagName("input");

    if (inputElements.length) {
      let categoryName = inputElements[0].id.split("-")[0];
      let categories = props.categories;

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

        for (let i = 0; i < widgets.length; i++) {
          let widget = widgets[i];
          if (widgetName.toLowerCase() === widget.name.toLowerCase()) {
            widget.active = item.checked;
            updatedCategory.widgets.push(widget);
            break;
          }
        }
      }

      categories = categories.filter((cat) => {
        return cat.name.toLowerCase() !== categoryName.toLowerCase();
      });

      categories.push(updatedCategory);

      props.addJsonData(categories);
    }
  }

  return (
    <div id="widget-sidebar">
      <div className="widget-block-region" id="widget-block-region"></div>
      <div className="widget-sidebar-main-region">
        <div className="sidebar-header">
          <div className="title">Add Widget</div>
          <div className="cancel-div">
            <button
              type="button"
              className="cross-button"
              onClick={cancelHandler}
            >
              X
            </button>
          </div>
        </div>
        <div className="subtitle">
          Personalise your dashboard by adding the following widget
        </div>

        <div className="sidebar-content">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <ul className="navbar-nav" id="navbar-nav">
              {props.categories.map((cat) => {
                return (
                  <NavLink
                    className="nav-link"
                    to={cat.name}
                    id={cat.name}
                    key={cat.name}
                  >
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
          <div className="confirm-div">
            <button
              type="button"
              className="confirm-button"
              onClick={confirmHandler}
            >
              Confirm
            </button>
          </div>
          <div className="cancel-div">
            <button
              type="button"
              className="cancel-button"
              onClick={cancelHandler}
            >
              Cancel
            </button>
          </div>
        </div>
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
