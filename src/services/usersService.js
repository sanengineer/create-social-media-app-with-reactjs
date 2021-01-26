import api from "./httpService";

class UsersServices {
  //
  //data public
  fetchAllUsers() {
    return api.get("/all-profiles");
  }

  fetchAllPostsPublic() {
    return api.get("/posts");
  }

  fetchtPostDetails(postId) {
    return api.get(`/post/${postId}`);
  }

  latestPostUser = (user_id) => {
    return api.get(`/posts/${user_id}`);
  };

  //
  //data private
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

  createPostText = (token, postTextData) => {
    return api.post("/new-post-text", postTextData, {
      headers: { authorization: token },
    });
  };
}

export default new UsersServices();
