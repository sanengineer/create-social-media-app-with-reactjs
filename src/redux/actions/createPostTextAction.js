import usersService from "../../services/usersService";
import * as actionTypes from "./actionTypes";

export const createPostText = (postText) => (dispatch) => {
  const token = localStorage.jwtToken;

  usersService
    .createPostText(token, postText)
    .then((res) => {
      //
      //debug
      //console.log("dispatch(onLoadPost(postText):\n", dispatch(onLoadPost()));
      //console.log("params_postTextData", postText);
      //console.log("response_createPostText:\n", res);
      dispatch(postSuccess(res.data));
    })
    .catch((err) => {
      dispatch({ type: actionTypes.GET_ERRORS, payload: err.response.data });
      //
      //debug
      //console.log("err_response_createPostText:\n", err.response.data);
    });
};

export const postStart = () => ({
  type: actionTypes.CREATE_USER_POST,
});

export const postSuccess = () => ({
  type: actionTypes.POST_SUCCESS,
});

//console.log("onloadPOSTTTT:\n", postSuccess);
