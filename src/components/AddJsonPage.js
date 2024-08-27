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

  function displayError(msg) {
    let errorDiv = document.getElementById("error-div");
    errorDiv.innerText = msg;
    errorDiv.style.display = "block";

    setTimeout(() => {
      errorDiv.innerText = "";
      errorDiv.style.display = "none";
    }, 2000);
  }

  function buttonHandler(e) {
    e.preventDefault();
    const fileInput = document.getElementById("json-input-file");
    let filereader = new FileReader();

    try {
      filereader.onload = (event) => {
        let result = event.target.result;
        let data;
        try {
          console.log(result);
          data = JSON.parse(result);
        } catch {
          console.log("JSON PARSING ERROR..");
          displayError("JSON PARSING ERROR..");
        }

        while (data == undefined) {}
        props.addJsonData(data);
        while (props.categories == undefined) {}
        navigate("dashboard");
      };

      filereader.readAsText(fileInput.files[0]);
    } catch (e) {
      console.log("PLEASE SELECT FILE..");
      displayError("PLEASE SELECT A JSON FILE....");
    }
  }

  function inputFileChangeHandler(e) {
    const fileInput = document.getElementById("json-input-file");
    const fileButton = document.getElementById("file-button-title");
    fileButton.innerText = fileInput.files[0].name;
  }

  return (
    <div className="file-container">
      <div className="error-div" id="error-div"></div>
      <div className="upload-json">UPLOAD JSON FILE:</div>
      <div className="upload-note">[Format your JSON File before uploading]</div>
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
