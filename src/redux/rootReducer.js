import { combineReducers } from "redux";
import { employeeReducer } from "./employee/employeeReducer";

/**
 * Combines all reducers of the application into a single rootReducer.
 *
 * @returns {object} The combined rootReducer object.
 */
const rootReducer = combineReducers({
  employees: employeeReducer,
  // other reducers: Add other reducers here as needed
});

export default rootReducer;
