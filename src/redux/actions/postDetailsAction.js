import * as actionTypes from "./actionTypes";
import UsersServices from "../../services/usersService";

export const fetchPostDetails = (postId) => (dispatch) => {
  UsersServices.fetchtPostDetails(postId)
    .then((res) => {
      console.log("res.data:", res.data.data);
      dispatch(fetchPostDetailsSuccess(res.data.data));
    })
    .catch((err) => {
      dispatch(fetchPostDetailsFail(err.response));
    });
};

export const fetchPostDetailsStart = () => ({
  type: actionTypes.FETCH_POST_DETAILS_START,
});

export const fetchPostDetailsSuccess = (postdetails) => ({
  type: actionTypes.FETCH_POST_DETAILS_SUCCESS,
  payload: { postdetails },
});

export const fetchPostDetailsFail = (error) => ({
  type: actionTypes.FETCH_PUBLIC_USERS_FAIL,
  payload: { error },
});
