import axios from "axios";
import * as actionTypes from "./actionTypes";
require("dotenv").config();

var url =
  "https://sosmetend.herokuapp.com/api/v1" ||
  `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0-rmxc3.mongodb.net/test?retryWrites=true&w=majority`;

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
