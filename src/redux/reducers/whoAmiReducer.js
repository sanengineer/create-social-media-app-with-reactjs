import {
  FETCH_WHOAMI_START,
  FETCH_WHOAMI_SUCCESS,
  FETCH_WHOAMI_FAIL,
} from "../actions/actionTypes";

const initialState = {
  whoami: [],
  loading: false,
  error: null,
};

export default function whoAmIReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WHOAMI_START:
      return {
        ...this.state,
        loading: true,
        error: null,
      };
    case FETCH_WHOAMI_SUCCESS:
      return {
        ...state,
        loading: false,
        whoami: action.payload.whoami,
      };
    case FETCH_WHOAMI_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        whoami: [],
      };
    default:
      return state;
  }
}
