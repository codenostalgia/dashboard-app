import * as React from "react";
import "../style/Category.css";
import Widget from "./Widget";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import EmptyWidget from "./EmptyWidget";

const Category = (props) => {
  const [state, setState] = React.useState({
    mylist: ["1", "2", "3", "4", "5"],
  });

  return (
    <Card body className="category-card border-light">
      <Row sm="12" className="category-row">
        <h4 className="category-title">{props.category.name}</h4>
        {props.category.widgets.map((widget) => {
          if (widget.active == true) {
            return (
              <Col sm="4" className="wid">
                <Widget widget={widget} />
              </Col>
            );
          }
        })}
        <Col sm="4" className="wid">
          <EmptyWidget />
        </Col>
      </Row>
    </Card>

    // <div className="category">
    // {state.mylist.map((item) => {
    //   return <Widget cId={props.cId} wId={item} />;
    // })}
    // </div>
  );
};

export default Category;
