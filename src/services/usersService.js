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

  fetchLoveReceived = (postId) => {
    return api.get(`/total-love/${postId}`);
  };

  fetchCommentsPost = (postId) => {
    return api.get(`/comments/${postId}`);
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

  createPostImage = (token, user_id, postImageData) => {
    return api.post(`/new-post-image/${user_id}`, postImageData, {
      headers: { authorization: token },
    });
  };

  giveLovePost = (token, loveData) => {
    return api.post("/love-post", loveData, {
      headers: { authorization: token },
    });
  };

  createComment = (token, comment) => {
    return api.post("/comment-post", comment, {
      headers: { authorization: token },
    });
  };

  uploadImages = (token, user_id, image_data) => {
    return api.post(`/upload-image/${user_id}`, image_data, {
      headers: { authorization: token },
    });
  };

  uploadVideos = (token, user_id, video_data) => {
    return api.post(`/upload-video/${user_id}`, video_data, {
      headers: { authorization: token },
    });
  };

  uploadDocs = (token, user_id, doc_data) => {
    return api.post(`/upload-doc/${user_id}`, doc_data, {
      headers: { authorization: token },
    });
  };

  fetchImages = (token, user_id) => {
    return api.get(`/storage-images/${user_id}`, {
      headers: { authorization: token },
    });
  };

  fetchVideos = (token, user_id) => {
    return api.get(`/storage-videos/${user_id}`, {
      headers: { authorization: token },
    });
  };

  fetchDocs = (token, user_id) => {
    return api.get(`/storage-docs/${user_id}`, {
      headers: { authorization: token },
    });
  };
}

export default new UsersServices();
