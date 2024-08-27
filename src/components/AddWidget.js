import React from "react";
import { Button } from "reactstrap";
import { Modal, ModalActions, ModalContent } from "semantic-ui-react";

import "../style/AddWidget.css";

function AddWidget() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="modal-div">
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button id="modal-btn">Show Modal</Button>}
        className="modal-popup"
        id="mymodal"
        animation={false}
      >
        <div className="heading">Add a Widget </div>

        <ModalContent animation={false}>
          <form className="ui form">
            <div className="field">
              <label>Name:</label>
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
              ></input>
            </div>

            <div class="field">
              <label>Data:</label>
              <textarea rows="2"></textarea>
            </div>
          </form>
        </ModalContent>

        <ModalActions className="action" animation={false}>
          <Button onClick={() => setOpen(false)} className="cancel-btn">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} className="confirm-btn">
            Addjnjn
          </Button>
        </ModalActions>
      </Modal>
    </div>
  );
}

export default AddWidget;
