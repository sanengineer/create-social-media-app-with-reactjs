import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8000/api/v1", //local server
  baseURL: "https://sosmetend.herokuapp.com/api/v1", //cloud xerver
  headers: {
    "Content-type": "application/json",
  },
});
