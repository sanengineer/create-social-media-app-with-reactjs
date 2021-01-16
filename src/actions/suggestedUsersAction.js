import * as actionTypes from "./actionTypes";

var url =
  "http://localhost:8000/api/v1" ||
  `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0-rmxc3.mongodb.net/test?retryWrites=true&w=majority`;

//fetch suggested
export const fetchSuggestedUsers = () => {
  return async (dispatch) => {
    dispatch(fetchSuggestedUsersStart());
    try {
      const response = await fetch(`${url}/all-profiles`);
      const res = await handleErrors(response);
      console.log(res);
      console.log(response);
      const json = await res.json();
      console.log(json.suggestedusers);
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
