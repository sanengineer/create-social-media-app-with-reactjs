import * as actionTypes from "./actionTypes";
import UsersServices from "../../services/usersService";

export const fetchImages = (user_id) => (dispatch) => {
  const token = localStorage.jwtToken;
  UsersServices.fetchImages(token, user_id)
    .then((res) => {
      //
      //debug
      // console.log("res.data:", res.data.data);
      dispatch(fetchImagesSuccess(res.data.data));
    })
    .catch((err) => {
      //
      //debug
      // console.log("err:", err.message);
      dispatch(fetchImagesFail(err.message));
    });
};

export const fetchImagesStart = () => ({
  type: actionTypes.FETCH_PRIVATE_IMAGES_START,
});

export const fetchImagesSuccess = (fetchimages) => ({
  type: actionTypes.FETCH_PRIVATE_IMAGES_SUCCESS,
  payload: { fetchimages },
});

export const fetchImagesFail = (error) => ({
  type: actionTypes.FETCH_PRIVATE_IMAGES_FAIL,
  payload: { error },
});
