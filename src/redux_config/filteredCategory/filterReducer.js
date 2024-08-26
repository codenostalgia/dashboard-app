import FILTER_CATEGORIES from "./filterType";

const initialFilteredCategoriesState = {
  filteredCategories: null,
};

const filteredCategoriesReducer = (
  prevState = initialFilteredCategoriesState,
  action
) => {
  console.log("action received: ", action);
  switch (action.type) {
    case FILTER_CATEGORIES:
      return {
        ...prevState,
        filteredCategories: action.payload,
      };
    default:
      return prevState;
  }
};

// console.log("milkshakeReducer: ", milkshakeReducer());

export { filteredCategoriesReducer };
