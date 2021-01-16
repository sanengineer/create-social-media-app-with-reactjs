import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import suggestedusers from "./suggestedUsers";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  suggestedusers: suggestedusers,
});
