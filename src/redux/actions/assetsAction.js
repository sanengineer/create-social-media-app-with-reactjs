import axios from "axios";
import * as actionTypes from "./actionTypes";
import { baseUrl } from "../../services/httpService";
require("dotenv").config();

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${baseUrl}/user`, userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data,
      })
    );
};
