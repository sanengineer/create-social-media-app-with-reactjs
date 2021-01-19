import axios from "axios";
import * as actionTypes from "./actionTypes";

var urlHeroku = "https://sosmetend.herokuapp.com/api/v1";

export const whoAmi = () => (dispatch) => {
  const response = axios.get(`${urlHeroku}/user/profile/me`, {
    Authorization: localStorage.jwtToken,
  });

  dispatch(fetchWhoAmiSuccess(response));
  //
  //debugging
  console.log("RESPONSESS:", response);

  //   return response;
};

export const fetchWhoAmiStart = () => ({
  type: actionTypes.FETCH_WHOAMI_START,
});

export const fetchWhoAmiSuccess = (whoami) => ({
  type: actionTypes.FETCH_WHOAMI_SUCCESS,
  payload: { whoami },
});

export const fetchWhoAmiFail = (error) => ({
  type: actionTypes.FETCH_WHOAMI_FAIL,
  payload: { error },
});
