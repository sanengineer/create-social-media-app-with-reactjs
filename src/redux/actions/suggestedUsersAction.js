import * as actionTypes from "./actionTypes";
import { baseUrl } from "../../services/httpService";

//fetch suggested
export const fetchSuggestedUsers = () => {
  return async (dispatch) => {
    dispatch(fetchSuggestedUsersStart());
    try {
      const response = await fetch(`${baseUrl}/all-profiles`);
      const res = await handleErrors(response);
      const json = await res.json();
      dispatch(fetchSuggestedUsersSuccess(json));
      return json;
    } catch (error) {
      return dispatch(fetchSuggestedUsersFail(error));
    }
  };
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchSuggestedUsersStart = () => ({
  type: actionTypes.FETCH_SUGGESTED_USERS_START,
});

export const fetchSuggestedUsersSuccess = (suggestedusers) => ({
  type: actionTypes.FETCH_SUGGESTED_USERS_SUCCESS,
  payload: { suggestedusers },
});

export const fetchSuggestedUsersFail = (error) => ({
  type: actionTypes.FETCH_SUGGESTED_USERS_FAIL,
  payload: { error },
});
