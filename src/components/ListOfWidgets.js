import * as React from "react";
import { useParams } from "react-router";
import { addData } from "../redux_config/store";
import { connect } from "react-redux";

const ListOfWidgets = (props) => {
  const { categoryName } = useParams();

  const category = props.categories.filter((cat) => {
    return cat.name.toLowerCase() === categoryName.toLowerCase();
  })
    ? props.categories.filter((cat) => {
        return cat.name.toLowerCase() === categoryName.toLowerCase();
      })
    : [];da

  console.log("category: ", category);

  return (
    <div id="select-active-widgets">
      {category.length ? (
        <>
          {category[0]["widgets"].map((widget, ind) => {
            let isChecked = widget.active;
            return (
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={widget.name}
                  id={widget.name}
                  defaultChecked={widget.active}
                ></input>
                <label className="form-check-label" for={widget.name}>
                  {widget.name} - Acive: {widget.active.toString()}
                </label>
              </div>
            );
          })}
        </>
      ) : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListOfWidgets);
