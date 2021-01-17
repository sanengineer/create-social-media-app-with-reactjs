import * as actionTypes from "./actionTypes";
import UsersServices from "../services/users-service";
import { fetchSuggestedUsersSuccess } from "./suggestedUsersAction";

export const fetchPublicUsers = () => (dispatch) => {
  UsersServices.fetchAllUsers().then((res) => {
    //
    //debugging
    console.log("TEST", res.data);

    dispatch(fetchPublicUsersSuccess(res.data));
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