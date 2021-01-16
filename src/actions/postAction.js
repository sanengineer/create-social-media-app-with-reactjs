import axios from "axios";
import * as actionTypes from './actionTypes';
require('dotenv').config()

var url = "https://sosmetend.herokuapp.com/api/v1" || `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0-rmxc3.mongodb.net/test?retryWrites=true&w=majority`

// R
export const posting =  (userData) => {
    console.log('posting ini')
    axios.post(`${url}/new-post`, userData, {
        headers: {
            Authorization : localStorage.jwtToken,
        }

    })
        .then(res => console.log(res))
        .catch(err => {
            console.log(err)
        })
}

//
export const latePostUser = (userId) => {
    axios.get(`${url}/posts/${userId}`,{
        Authorization : localStorage.jwtToken
    })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

// 
export const detailPost = (userData, postId) => dispatch => {
    axios.get(`${url}/post/${postId}`, userData)
        .then(res => console.log(res))
        .catch(err => 
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: err.response.data
            }))
}