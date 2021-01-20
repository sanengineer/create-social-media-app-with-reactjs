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

  whoami = (token) => {
    return api.get("/user/profile/me", { headers: { authorization: token } });
  };

  updateWhoAmi = (user_id, whoami, token) => {
    return api.put(`/user/${user_id}`, whoami, {
      headers: { authorization: token },
    });
  };

  updateImageProfile = (user_id, token) => {
    return api.put(`/avatar/${user_id}`, {
      headers: { authorization: token },
    });
  };
}

export default new UsersServices();
