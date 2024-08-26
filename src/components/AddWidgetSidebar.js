import * as React from "react";
import "../style/AddWidgetSidebar.css";
import { Card, Col } from "reactstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AddWidgetSidebar = (props) => {
  function cancelHandler(e) {
    const sidebar = document.getElementById("widget-sidebar");
    sidebar.style.display = "none";
  }

  function confirmHandler(e) {
    const sidebar = document.getElementById("widget-sidebar");
    sidebar.style.display = "none";

    
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
            <NavLink className="nav-link" to="cspm">
              CSPM
            </NavLink>

            <NavLink className="nav-link" to="cwpp">
              CWPP
            </NavLink>

            <NavLink className="nav-link" to="image">
              Image
            </NavLink>

            <NavLink className="nav-link" to="ticket">
              Ticket
            </NavLink>
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

export default AddWidgetSidebar;
