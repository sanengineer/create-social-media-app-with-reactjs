import {
  FETCH_PUBLIC_USERS_FAIL,
  FETCH_PUBLIC_USERS_START,
  FETCH_PUBLIC_USERS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  publicusers: [],
  loading: false,
  error: null,
};

export default function publicUserReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PUBLIC_USERS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PUBLIC_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        publicusers: action.payload.publicusers,
      };
    case FETCH_PUBLIC_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        publicusers: [],
      };
    default:
      return state;
  }
}
