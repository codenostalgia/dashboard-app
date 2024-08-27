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

  // const notify = () => toast("Button Pressed!");

  function buttonHandler(e) {
    e.preventDefault();
    // notify();
    const fileInput = document.getElementById("json-input-file");

    console.log(fileInput.files);

    let filereader = new FileReader();

    filereader.onload = (event) => {
      // console.log("Result: ", event.target.result);

      let data = JSON.parse(event.target.result);
      while (data == undefined) {}
      console.log("data: ", data);
      props.addJsonData(data);
      while (props.categories == undefined) {}
      console.log("categories: ", props.categories);
      navigate("dashboard");
    };

    filereader.readAsText(fileInput.files[0]);
  }

  return (
    <div className="file-container" textAlign="justified">
      <div className="upload-json">UPLOAD JSON FILE:</div>
      <Divider/>

      <div class="main">
        {/* <div class="file-div">
          <input class="" type="file" id="fileinput" accept=".json"></input>
        </div> */}
        <div class="file-div">
          <label for="json-input-file" class="custom-file-upload">
            &lt; Choose File &gt;
          </label>
          <input id="json-input-file" type="file" accept=".json" />
        </div>
        <br />
        <div className="button-div">
          <button
            type="button"
            class="btn btn-light upload-btn"
            onClick={buttonHandler}
          >
            UPLOAD
          </button>
        </div>
      </div>
      <ToastContainer />
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
