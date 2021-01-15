import axios from "axios";
import * as actionTypes from './actionTypes';
require('dotenv').config()

var url = "https://sosmetend.herokuapp.com/api/v1" || `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0-rmxc3.mongodb.net/test?retryWrites=true&w=majority`

// R
export const posting =  (userData) => {
    axios.post(`${url}/new-post`, userData, {
        headers: {
            Authorization : 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImNvYmFqYUBiaXNhLmthbiIsImlhdCI6MTYxMDY3MjE2NSwiZXhwIjoxNjEzMjY0MTY1fQ.ReU3ClaLOCLBtAOAb74yvDETvITU_n2-7__wQxneqHk',
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
        Authorization : 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImNvYmFqYUBiaXNhLmthbiIsImlhdCI6MTYxMDY3MjE2NSwiZXhwIjoxNjEzMjY0MTY1fQ.ReU3ClaLOCLBtAOAb74yvDETvITU_n2-7__wQxneqHk'
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