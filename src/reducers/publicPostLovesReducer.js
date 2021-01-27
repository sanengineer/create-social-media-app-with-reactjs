import {
  FETCH_POST_LOVES_START,
  FETCH_POST_LOVES_FAIL,
  FETCH_POST_LOVES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  loves: [],
  loading: false,
  error: null,
};

export default function publicPostLovesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_LOVES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POST_LOVES_SUCCESS:
      return {
        ...state,
        loading: false,
        loves: action.payload.loves,
      };
    case FETCH_POST_LOVES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        loves: [],
      };
    default:
      return state;
  }
}
