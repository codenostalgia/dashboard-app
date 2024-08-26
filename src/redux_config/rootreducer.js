import { categoriesReducer } from "./category/categoryReducer";
import { combineReducers } from "redux";

// for every reducer, a node is created under state,
// with the name given by "key"
// so while accessing numberOfCake, we have access it like,
// state.cake.numberOfCakes
const combinedReducerObject = {
  category: categoriesReducer,
};

const rootreducer = combineReducers(combinedReducerObject);

export default rootreducer;
