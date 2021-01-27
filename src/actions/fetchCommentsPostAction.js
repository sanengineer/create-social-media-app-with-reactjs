import * as actionTypes from "./actionTypes";
import UsersServices from "../services/usersService";

export const fetchCommentsPost = (postId) => (dispatch) => {
  UsersServices.fetchCommentsPost(postId)
    .then((res) => {
      //
      //debug
      console.log("res.data:", res.data.data);
      dispatch(fetchCommentsPostSuccess(res.data.data));
    })
    .catch((err) => {
      //
      //debug
      console.log("err:", err.response);
      dispatch(fetchCommentsPostFail(err.response));
    });
};

export const fetchCommentsPostStart = () => ({
  type: actionTypes.FETCH_COMMENTS_POST_START,
});

export const fetchCommentsPostSuccess = (commentspost) => ({
  type: actionTypes.FETCH_COMMENTS_POST_SUCCESS,
  payload: { commentspost },
});

export const fetchCommentsPostFail = (error) => ({
  type: actionTypes.FETCH_COMMENTS_POST_FAIL,
  payload: { error },
});
