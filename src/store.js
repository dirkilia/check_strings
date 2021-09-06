import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import textStringsReducer from "./reducers/textStringsReducer";

/**
 * Combining reducers and creating store
 */

const reducers = combineReducers({
  textStrings: textStringsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
