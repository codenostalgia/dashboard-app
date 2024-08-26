import * as React from "react";
import "../style/Widget.css";

const Widget = (props) => {
  return (
    <div className="widget">
      <h3>
        {props.widget.name}
      </h3>
    </div>
  );
};

export default Widget;
