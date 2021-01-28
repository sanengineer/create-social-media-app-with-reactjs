import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import * as actionTypes from "./actionTypes";
require("dotenv").config();

var url = "http://localhost:8000/api/v1";

// var url = "https://sosmetend.herokuapp.com/api/v1";

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${url}/user`, userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data,
      })
    );
};
