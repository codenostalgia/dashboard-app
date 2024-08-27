import * as React from "react";
import "../style/HeaderHome.css";

const HeaderHome = (props) => {
  const activeItem = "home";

  return (
    <div className="myheader">
      <div className="main-heading">
        <strong>CNAPP Dashboard</strong>
      </div>
    </div>
  );
};

export default HeaderHome;
