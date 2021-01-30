import {
  FETCH_PRIVATE_IMAGES_START,
  FETCH_PRIVATE_IMAGES_SUCCESS,
  FETCH_PRIVATE_IMAGES_FAIL,
} from "../actions/actionTypes";

const initialState = {
  fetchimages: [],
  loading: false,
  error: null,
};

export default function fetchImagesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRIVATE_IMAGES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRIVATE_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchimages: action.payload.fetchimages,
      };
    case FETCH_PRIVATE_IMAGES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        fetchimages: [],
      };
    default:
      return state;
  }
}
