import axios from axios
import * as actionTypes from "./actionTypes"


var urlHeroku = "https://sosmetend.herokuapp.com/api/v1";

export const userProfile = () => {
    const response = axios.get(`${urlHeroku}/user/profile/me`, {
        Authorization: localStorage.jwtToken
    })

    return response
}