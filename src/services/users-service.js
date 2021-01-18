import api from "./http-service";

class UsersServices {
  //
  //data public
  fetchAllUsers() {
    return api.get("/all-profiles");
  }

  fetchAllPostsPublic() {
    return api.get("/posts");
  }
}

export default new UsersServices();
