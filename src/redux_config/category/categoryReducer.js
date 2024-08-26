import ADD_DATA from "./categoryType";

const initialCategoriesState = {
  categories: [],
};

const categoriesReducer = (prevState = initialCategoriesState, action) => {
  console.log("action received: ", action);
  switch (action.type) {
    case ADD_DATA:
      return {
        ...prevState,
        categories: action.payload,
      };
    default:
      return prevState;
  }
};

// console.log("milkshakeReducer: ", milkshakeReducer());

export { categoriesReducer };
