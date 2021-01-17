import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, enhancers);

export default store;
