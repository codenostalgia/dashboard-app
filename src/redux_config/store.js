import { createStore, applyMiddleware, compose } from "redux";
import addData from "./category/categoryAction";
import filterData from "./filteredCategory/filterAction";

import rootreducer from "./rootreducer";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);

const dispatch = store.dispatch;

// console.log("INITIAL STATE: ", store.getState());

export { store, addData, filterData, dispatch };
