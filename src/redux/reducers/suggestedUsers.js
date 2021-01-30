import {
  FETCH_SUGGESTED_USERS_START,
  FETCH_SUGGESTED_USERS_SUCCESS,
  FETCH_SUGGESTED_USERS_FAIL,
} from "../actions/actionTypes";

const initialState = { suggestedusers: [], loading: false, error: null };

export default function suggestedUsersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUGGESTED_USERS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUGGESTED_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        suggestedusers: action.payload.suggestedusers,
      };
    case FETCH_SUGGESTED_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        suggestedusers: [],
      };
    default:
      return state;
  }
}
