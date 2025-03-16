import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json",
  },
});

// Get all posts
export const getAllPosts = async () => {
  return await api.get("/posts");
};

// Delete a post
export const deletePost = async (id) => {
  return await api.delete(`/posts/${id}`);
};

// Add a post
export const addPost = async (post) => {
  return await api.post("/posts", post);
};

// update Post
export const updatePost = async (id, post) => {
  return await api.put(`/posts/${id}`, post);
};
