import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

/**
 * Creates a Redux store using the combined rootReducer and applies the logger middleware for debugging.
 *
 * @returns {object} The created Redux store.
 */
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
