import * as React from "react";
import { Container, Header, Divider } from "semantic-ui-react";
import "../style/AddJsonPage.css";
import addData from "../redux_config/category/categoryAction";
import { connect } from "react-redux";
import { dispatch } from "../redux_config/store";
import { useNavigate } from "react-router";

const AddJsonPage = (props) => {
  const navigate = useNavigate();

  function buttonHandler(e) {
    e.preventDefault();
    const fileInput = document.getElementById("fileinput");

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
    <Container className="file-container" textAlign="justified">
      <h1>
        <b>UPLOAD JSON:</b>
      </h1>
      <Divider />
      <h5 id="hidden"></h5>

      <div class="file-div">
        <input
          type="file"
          class="inputfile bg-secondary"
          id="fileinput"
          accept=".json"
        ></input>

        <button type="button" class="btn btn-light" onClick={buttonHandler}>
          UPLOAD
        </button>
      </div>
    </Container>
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
