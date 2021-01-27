import {
  CREATE_USER_COMMENT_START,
  CREATE_USER_COMMENT_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isCommented: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_COMMENT_START:
      return {
        ...state,
      };
    case CREATE_USER_COMMENT_SUCCESS:
      return {
        ...state,
        isCommented: true,
      };
    default:
      return state;
  }
}
