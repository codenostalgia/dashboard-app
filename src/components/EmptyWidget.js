import * as React from "react";
import "../style/EmptyWidget.css";
import { Button } from "semantic-ui-react";

const EmptyWidget = (props) => {
  return (
    <div className="empty-widget">
      <Button className="add-widget-btn">+ Add Widget</Button>
    </div>
  );
};

export default EmptyWidget;
