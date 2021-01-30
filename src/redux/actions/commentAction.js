import axios from "axios";
import { baseUrl } from "../../services/httpService";
require("dotenv").config();

// R
export const commenting = (commentData) => {
  // console.log('posting ini')
  const response = axios.post(`${baseUrl}/comment-post`, commentData, {
    headers: {
      Authorization: localStorage.jwtToken,
    },
  });

  return response;
};

//
export const getComments = (postId) => {
  const response = axios.get(`${baseUrl}/comments/${postId}`, {
    Authorization: localStorage.jwtToken,
  });

  return response;
};
