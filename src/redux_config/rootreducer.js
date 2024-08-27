import { categoriesReducer } from "./category/categoryReducer";
import { combineReducers } from "redux";
import { filteredCategoriesReducer } from "./filteredCategory/filterReducer";

const combinedReducerObject = {
  category: categoriesReducer,
  filter: filteredCategoriesReducer,
};

const rootreducer = combineReducers(combinedReducerObject);

export default rootreducer;
