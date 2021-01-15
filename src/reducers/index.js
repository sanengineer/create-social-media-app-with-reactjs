import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import suggested_Users from "./usersPublicReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  sugusers: suggested_Users,
});
