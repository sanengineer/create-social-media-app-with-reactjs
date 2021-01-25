// import axios from "axios";
import UsersServices from "../services/usersService";
import * as actionTypes from "./actionTypes";

export const fetchWhoAmi = () => (dispatch) => {
  const token = localStorage.jwtToken;

  // const response = axios.get(`${urlHeroku}/user/profile/me`, {
  //   Authorization: localStorage.jwtToken,
  // });

  UsersServices.whoami(token).then((res) => {
    //
    //debugging
    // console.log("TESTTTTTT:", res.data);
    dispatch(fetchWhoAmiSuccess(res.data));
  });

  //
  //debugging
  // // console.log("RESPONSESS:", response);
  // console.log("TOKENNNNN:", localStorage.jwtToken);
  // // console.log("TOKEN:", token);

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
