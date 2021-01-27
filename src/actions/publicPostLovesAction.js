import * as actionTypes from "./actionTypes";
import UsersServices from "../services/usersService";

export const fetchPostLoves = (postId) => (dispatch) => {
  UsersServices.fetchLoveReceived(postId)
    .then((res) => {
      dispatch(fetchPostLovesSuccess(res.data.data));
    })
    .catch((err) => {
      dispatch(fetchPostLovesFail(err.response));
    });
};

export const fetchPostLovesStart = () => ({
  type: actionTypes.FETCH_POST_LOVES_START,
});

export const fetchPostLovesSuccess = (loves) => ({
  type: actionTypes.FETCH_POST_LOVES_SUCCESS,
  payload: { loves },
});

export const fetchPostLovesFail = (error) => ({
  type: actionTypes.FETCH_PUBLIC_USERS_FAIL,
  payload: { error },
});
