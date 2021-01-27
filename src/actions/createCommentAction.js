import * as actionTypes from "./actionTypes";
import UsersService from "../services/usersService";

export const createComment = (comment) => (dispatch) => {
  const token = localStorage.jwtToken;

  UsersService.createComment(token, comment)
    .then((res) => {
      dispatch(commentSucess(res.data));
    })
    .catch((err) => {
      dispatch(commentFail(err.message));
    });
};

export const commentStart = () => ({
  type: actionTypes.CREATE_USER_COMMENT_START,
});

export const commentSucess = () => ({
  type: actionTypes.CREATE_USER_COMMENT_SUCCESS,
});

export const commentFail = (error) => ({
  type: actionTypes.GET_ERRORS,
  payload: { error },
});
