import { CREATE_USER_POST, POST_SUCCESS } from "../actions/actionTypes";

const initialState = {
  isPosted: false,
  // textContent: ""
};

// console.log("initialState.postText:\n", initialState.postText);
// console.log("initialState.postText:\n", initialState.isLoading);

export default function postTextReducer(state = initialState, action) {
  switch (action.type) {
    // case CREATE_USER_POST:
    //   return action.payload;
    case CREATE_USER_POST:
      return {
        ...state,
        // textContent: action.payload,
        // isPosted: false,
      };

    case POST_SUCCESS:
      return {
        ...state,
        isPosted: true,
      };
    default:
      return state;
  }
}
