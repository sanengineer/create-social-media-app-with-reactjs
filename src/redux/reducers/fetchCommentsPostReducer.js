import {
  FETCH_COMMENTS_POST_START,
  FETCH_COMMENTS_POST_SUCCESS,
  FETCH_COMMENTS_POST_FAIL,
} from "../actions/actionTypes";

const initialState = {
  commentspost: [],
  loading: false,
  error: null,
};

export default function fetchCommentsPostReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS_POST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COMMENTS_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        commentspost: action.payload.commentspost,
      };
    case FETCH_COMMENTS_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        commentspost: [],
      };
    default:
      return state;
  }
}
