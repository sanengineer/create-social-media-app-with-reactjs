import * as actionTypes from "./actionTypes";
import UsersServices from "../../services/usersService";

export const fetchVideos = (user_id) => (dispatch) => {
  const token = localStorage.jwtToken;
  UsersServices.fetchVideos(token, user_id)
    .then((res) => {
      //
      //debug
      // console.log("res.data:", res.data.data);
      dispatch(fetchVideosSuccess(res.data.data));
    })
    .catch((err) => {
      //
      //debug
      // console.log("err:", err.message);
      dispatch(fetchVideosFail(err.message));
    });
};

export const fetchVideosStart = () => ({
  type: actionTypes.FETCH_PRIVATE_VIDEOS_START,
});

export const fetchVideosSuccess = (fetchvideos) => ({
  type: actionTypes.FETCH_PRIVATE_VIDEOS_SUCCESS,
  payload: { fetchvideos },
});

export const fetchVideosFail = (error) => ({
  type: actionTypes.FETCH_PRIVATE_VIDEOS_FAIL,
  payload: { error },
});
