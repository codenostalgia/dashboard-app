import ADD_DATA from "./categoryType";

const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data ? data : [],
  };
};

export default addData;
