import * as React from "react";
import "../style/HeaderJSON.css";
import { MenuItem, Menu, Segment } from "semantic-ui-react";

const HeaderHome = (props) => {
  const activeItem = "home";

  return (
    <div className="myheader">
      <h2 className="main-heading">CNAPP Dashboard</h2>
    </div>
  );
};

export default HeaderHome;
