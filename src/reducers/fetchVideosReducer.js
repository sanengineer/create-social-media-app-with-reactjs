import {
  FETCH_PRIVATE_VIDEOS_START,
  FETCH_PRIVATE_VIDEOS_SUCCESS,
  FETCH_PRIVATE_VIDEOS_FAIL,
} from "../actions/actionTypes";

const initialState = {
  fetchvideos: [],
  loading: false,
  error: null,
};

export default function fetchVideosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRIVATE_VIDEOS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRIVATE_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchvideos: action.payload.fetchvideos,
      };
    case FETCH_PRIVATE_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        fetchvideos: [],
      };
    default:
      return state;
  }
}
