import * as actionTypes from "./actionTypes";
import UsersServices from "../../services/usersService";

export const fetchPublicUsers = () => (dispatch) => {
  UsersServices.fetchAllPostsPublic()
    .then((res) => {
      //
      //debugging
      // console.log("TEST", res.data.data);

      dispatch(fetchPublicUsersSuccess(res.data.data));
    })
    .catch((err) => {
      dispatch(fetchPublicUsersFail(err.response));
    });
};

export const fetchPublicUsersStart = () => ({
  type: actionTypes.FETCH_PUBLIC_USERS_START,
});

export const fetchPublicUsersSuccess = (publicusers) => ({
  type: actionTypes.FETCH_PUBLIC_USERS_SUCCESS,
  payload: { publicusers },
});

export const fetchPublicUsersFail = (error) => ({
  type: actionTypes.FETCH_PUBLIC_USERS_FAIL,
  payload: { error },
});
