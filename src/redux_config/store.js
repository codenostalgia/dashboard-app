import { createStore, applyMiddleware, compose } from "redux";
import addData from "./category/categoryAction";

import rootreducer from "./rootreducer";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);

const dispatch = store.dispatch;

// check initial state
console.log("INITIAL STATE: ", store.getState());

// listner to be called on each dispatch
// store.subscribe(() => {
//   console.log("updated State: ", store.getState());
// });

export { store,addData,  dispatch };
