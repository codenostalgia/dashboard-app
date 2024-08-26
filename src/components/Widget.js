import * as React from "react";
import "../style/Widget.css";

import { connect } from "react-redux";
import { addData } from "../redux_config/store";

const Widget = (props) => {
  function eraseHandler(e) {
    let updatedCategories = props.categories.map((cat) => {
      cat.widgets = cat.widgets.map(wid => {
        if (wid.name.toLowerCase() === props.widget.name.toLowerCase()) {
          wid.active = false;
          return wid;
        }
        return wid;
      })
      return cat;
    })

    props.addJsonData(updatedCategories);
  }

  return (
    <div className="widget">
      <div className="left">
        <h3 className="widget-title">{props.widget.name}</h3>
      </div>
      <div className="right">
        <button className="erase-widget" onClick={eraseHandler}>
          X
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.category.categories.sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addJsonData: (data) => dispatch(addData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
