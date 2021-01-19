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

  me = (token) => {
    return api.get("/user/profile/me", { headers: { authorization: token } });
  };
}

export default new UsersServices();
