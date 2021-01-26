import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postTextReducer from "./postTextReducer";
import suggestedusers from "./suggestedUsers";
import linksInfoWeb from "./footerReducer";
import publicusers from "./publicUsers";
import whoami from "./whoAmiReducer";
import postdetails from "./postDetailsReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  postText: postTextReducer,
  suggestedusers: suggestedusers,
  linksInfoWeb: linksInfoWeb,
  publicusers: publicusers,
  whoami: whoami,
  postdetails: postdetails,
});
