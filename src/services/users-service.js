import api from "./http-service";

class UsersServices {
  //
  //data public
  fetchAllUsers() {
    return api.get("/all-profiles");
  }
}

export default new UsersServices();
