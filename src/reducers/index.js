import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import postReducer from './postReducer';
import suggestedusers from "./suggestedUsers";
import linksInfoWeb from "./footerReducer";
import publicusers from "./publicUsers";

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    post: postReducer,
    suggestedusers: suggestedusers,
    linksInfoWeb: linksInfoWeb,
    publicusers: publicusers,
})