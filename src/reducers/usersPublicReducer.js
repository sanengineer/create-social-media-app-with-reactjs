import { GET_SUGGESTED_USERS } from "../actions/actionTypes";

const initialState = {
  suggested_Users: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUGGESTED_USERS:
      return {
        ...state,
        suggested_Users: action.payload,
      };
    default:
      return state;
  }
}
