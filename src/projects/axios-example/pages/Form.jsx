import { useEffect, useState } from "react";
import { addPost, updatePost } from "../APIs/ApiServices";
import "./form.css";

export const Form = ({ posts, setPosts, updateData, setUpdateData }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const isEdit = Object.keys(updateData).length > 0;

  useEffect(() => {
    setPost({
      title: updateData.title,
      body: updateData.body,
    });
  }, [updateData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const addPostToAPI = async () => {
    try {
      setLoading(true);
      const response = await addPost(post);
      if (response.status === 201) {
        setPosts([...posts, response.data]);
        setPost({ title: "", body: "" });
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updatePostToAPI = async () => {
    try {
      setLoading(true);
      const response = await updatePost(updateData.id, post);
      console.log(response);

      if (response.status === 200) {
        setPosts(
          posts.map((post) =>
            post.id === response.data.id ? response.data : post
          )
        );

        setPost({ title: "", body: "" });
        setUpdateData({});
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updatePostToAPI();
    } else {
      addPostToAPI();
    }
  };

  return (
    <form className="post-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        value={post.title}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="body"
        placeholder="Enter Post details"
        value={post.body}
        onChange={handleInputChange}
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" disabled={loading}>
        {isEdit
          ? loading
            ? "Editing..."
            : "Edit"
          : loading
          ? "Adding..."
          : "Add"}
      </button>
    </form>
  );
};
