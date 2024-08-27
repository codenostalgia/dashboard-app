import * as React from "react";
import "../style/Category.css";
import Widget from "./Widget";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import EmptyWidget from "./EmptyWidget";
import { addData, filterData } from "../redux_config/store";
import { connect } from "react-redux";

const Category = (props) => {
  return (
    <Card body className="category-card border-light">
      <Row sm="12" className="category-row">
        <div className="category-title">
          <strong>{props.category.name}</strong>
        </div>
        {props.category.widgets.map((widget) => {
          if (widget.active == true) {
            return (
              <Col sm="4" className="wid">
                <Widget widget={widget} />
              </Col>
            );
          }
        })}
        {props.filteredCategories == null ? (
          <Col sm="4" className="wid">
            <EmptyWidget categoryName={props.category.name} />
          </Col>
        ) : null}
      </Row>
    </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
