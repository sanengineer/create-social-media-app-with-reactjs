import axios from "axios";
import setAuthToken from "../utils/setAuthToken"
import jwt_decode from "jwt-decode"
import * as actionTypes from './actionTypes';
require('dotenv').config()

var url = "http://localhost:3030/api/v1" || `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0-rmxc3.mongodb.net/test?retryWrites=true&w=majority`

// Register User
export const registerUser =  (userData, history) => dispatch => {
    axios.post(`${url}/register`, userData)
        .then(res => history.push("/login"))
        .catch(err => 
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: err.response.data
            }))
}

// Login - get user token
export const loginUser = userData => dispatch => {
    axios.post(`${url}/login`, userData)
        .then(res => {
            console.log('ini adalah response', res.data);
            const token = res.data.accessToken;
            // const { user } = res.data;
            console.log(token);
            // console.log({user});
            //set token to localstorage
            localStorage.setItem("jwtToken", token)
            //set token to Auth header
            setAuthToken(token);
            const decoded =jwt_decode(token);
            //set current user
            console.log('ini data decode', decoded)
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => 
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: err
            }))
}

//set logged in user
export const setCurrentUser = decoded => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: decoded
    }
}

//User loading
export const setUserLoading = () => {
    return {
        type: actionTypes.USER_LOADING
    }
}

//User log out
export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken")
    setAuthToken(false)
    dispatch(setCurrentUser({}))
    
}