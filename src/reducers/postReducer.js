import {
    SET_USER_POST,
} from "../actions/actionTypes"

const isEmpty = require('is-empty');

const initialState ={
    post: {}
}

export default function(state = initialState, action){
    switch (action.type) {
        case SET_USER_POST:
            return{
                ...state,
                post: action.payload
            };
        default:
            return state;
    }
}
