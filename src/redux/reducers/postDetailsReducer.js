import {
  FETCH_POST_DETAILS_FAIL,
  FETCH_POST_DETAILS_START,
  FETCH_POST_DETAILS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  postdetails: [],
  loading: false,
  error: null,
};

export default function postdetailsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_DETAILS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POST_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        postdetails: action.payload.postdetails,
      };
    case FETCH_POST_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        postdetails: [],
      };
    default:
      return state;
  }
}
