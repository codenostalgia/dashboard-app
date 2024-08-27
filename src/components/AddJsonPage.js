import * as React from "react";
import { Container, Header, Divider } from "semantic-ui-react";
import "../style/AddJsonPage.css";
import addData from "../redux_config/category/categoryAction";
import { connect } from "react-redux";
import { dispatch } from "../redux_config/store";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const AddJsonPage = (props) => {
  const navigate = useNavigate();

  function buttonHandler(e) {
    e.preventDefault();
    const fileInput = document.getElementById("json-input-file");
    let filereader = new FileReader();

    filereader.onload = (event) => {
      let data = JSON.parse(event.target.result);
      while (data == undefined) {}
      props.addJsonData(data);
      while (props.categories == undefined) {}
      navigate("dashboard");
    };

    filereader.readAsText(fileInput.files[0]);
  }

  function inputFileChangeHandler(e) {
    const fileInput = document.getElementById("json-input-file");
    const fileButton = document.getElementById("file-button-title");
    fileButton.innerText = fileInput.files[0].name;
  }

  return (
    <div className="file-container">
      <div className="upload-json">UPLOAD JSON FILE:</div>
      <Divider />

      <div className="main">
        <div className="file-div">
          <label
            htmlFor="json-input-file"
            className="custom-file-upload"
            id="file-button-title"
          >
            &lt; Choose File &gt;
          </label>
          <input
            id="json-input-file"
            type="file"
            accept=".json"
            onChange={inputFileChangeHandler}
          />
        </div>
        <br />
        <div className="button-div">
          <button
            type="button"
            className="btn btn-light upload-btn"
            onClick={buttonHandler}
          >
            UPLOAD
          </button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddJsonPage);

// export default AddJsonPage;
