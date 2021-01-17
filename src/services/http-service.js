import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8000/api/v1", //Local Server
  baseURL: "https://sosmetend.herokuapp.com/api/v1", //Cloud Server
  headers: {
    "Content-type": "application/json",
  },
});
