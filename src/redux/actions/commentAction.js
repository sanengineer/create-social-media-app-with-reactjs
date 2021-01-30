import axios from "axios";
require("dotenv").config();

// var url = "http://localhost:8000/api/v1";
var url = "https://sosmetend.herokuapp.com/api/v1";

// R
export const commenting = (commentData) => {
  // console.log('posting ini')
  const response = axios.post(`${url}/comment-post`, commentData, {
    headers: {
      Authorization: localStorage.jwtToken,
    },
  });

  return response;
};

//
export const getComments = (postId) => {
  const response = axios.get(`${url}/comments/${postId}`, {
    Authorization: localStorage.jwtToken,
  });

  return response;
};
