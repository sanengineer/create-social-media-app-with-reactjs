// import axios from "axios";
import UsersServices from "../../services/usersService";
import * as actionTypes from "./actionTypes";

export const fetchWhoAmi = () => (dispatch) => {
  const token = localStorage.jwtToken;
  // // console.log("ini token di whoamiaction.js", token)

  if (token !== undefined) {
    UsersServices.whoami(token)
      .then((res) => {
        //
        //debugging
        // // console.log("TESTTTTTT:", res.data);
        dispatch(fetchWhoAmiSuccess(res.data));
      })
      .catch((err) => {
        // // console.log('ini gagal who ami di action', err)
        dispatch(fetchWhoAmiNull());
      });
  } else {
    // console.log("aku nullkan whoami");
    dispatch(fetchWhoAmiNull());
  }
};
export const putWhoAmi = (data) => (dispatch) => {
  dispatch(putWhoAmiEdit(data));
};

export const fetchWhoAmiStart = () => ({
  type: actionTypes.FETCH_WHOAMI_START,
});

export const fetchWhoAmiNull = () => ({
  type: actionTypes.FETCH_WHOAMI_NULL,
});

export const fetchWhoAmiSuccess = (whoami) => ({
  type: actionTypes.FETCH_WHOAMI_SUCCESS,
  payload: { whoami },
});

export const putWhoAmiEdit = (whoami) => ({
  type: actionTypes.PUT_WHOAMI,
  payload: { whoami },
});

export const fetchWhoAmiFail = (error) => ({
  type: actionTypes.FETCH_WHOAMI_FAIL,
  payload: { error },
});
