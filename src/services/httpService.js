import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8000/api/v1", //local server
  baseURL: "https://sosmetend.herokuapp.com/api/v1", //cloud xerver
  headers: {
    "Content-type": "application/json",
  },
});

// const baseUrl = "http://localhost:8000/api/v1"; //local server
const baseUrl = "https://sosmetend.herokuapp.com/api/v1"; //cloud xerver

export { api, baseUrl };
