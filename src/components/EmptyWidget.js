import * as React from "react";
import "../style/EmptyWidget.css";

import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
} from "semantic-ui-react";
import { addData } from "../redux_config/store";
import { connect } from "react-redux";

import "../style/AddWidget.css";

const EmptyWidget = (props) => {
  const [open, setOpen] = React.useState(false);

  function cancelHandler(e) {
    setOpen(false);
  }

  function confirmHandler(e) {
    let widName = document.getElementById("wid-name");
    let widData = document.getElementById("wid-data");

    let widget = {
      name: "",
      data: "",
      active: true,
    };

    widget["name"] = widName.value;
    widget["data"] = widData.value;

    let categories = props.categories.map((cat) => {
      if (cat.name.toLowerCase() === props.categoryName.toLowerCase()) {
        cat.widgets.push(widget)
        return cat;
      }
      return cat;
    });

    props.addJsonData(categories);

    setOpen(false);
  }

  return (
    <div className="empty-widget">
      <div className="modal-div">
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button className="add-widget-btn">+ Add Widget</Button>}
          className="modal-popup"
          id="mymodal"
        >
          <ModalHeader>Add a Widget</ModalHeader>

          <ModalContent>
            <form className="ui form">
              <div className="field">
                <label>Name:</label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="Wdget Name...."
                  id="wid-name"
                ></input>
              </div>

              <div className="field">
                <label>Data:</label>
                <textarea rows="2" id="wid-data"></textarea>
              </div>
            </form>
          </ModalContent>
          <ModalActions className="action">
            <Button onClick={cancelHandler} className="cancel-btn">
              Cancel
            </Button>
            <Button onClick={confirmHandler} className="confirm-btn">
              Add
            </Button>
          </ModalActions>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmptyWidget);
