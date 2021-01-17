import axios from "axios";
import * as actionTypes from './actionTypes';
require('dotenv').config()

var url = "http://localhost:3030/api/v1" || `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0-rmxc3.mongodb.net/test?retryWrites=true&w=majority`

// R
export const posting =  (userData) => {
    console.log('posting ini')
    const response = axios.post(`${url}/new-post`, userData, {
        headers: {
            Authorization : localStorage.jwtToken,
        }
    })

    return response;
}

//
export const latePostUser = (userId) => {
    const response = axios.get(`${url}/posts/${userId}`,{
        Authorization : localStorage.jwtToken
    })

    return response;
}

export const postDetail = postData => dispatch => {
    dispatch(setDetailPost(postData))
}
// 
export const setDetailPost = postData => {
    return {
        type: actionTypes.SET_USER_POST,
        payload: postData
    }
}