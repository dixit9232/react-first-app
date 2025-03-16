import { useEffect, useState } from "react";
import { deletePost, getAllPosts } from "../APIs/ApiServices";
import "./posts.css";
import { Form } from "./Form";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateData, setUpdateData] = useState({});

  const fetchAllPosts = async () => {
    try {
      const response = await getAllPosts();
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      setLoading(true);
      const response = await deletePost(id);
      if (response.status === 200) {
        setPosts(posts.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handelOnUpdatePost = (post) => {
    setUpdateData(post);
  };

  return (
    <section className="container">
      <h1 className="heading">Latest Posts</h1>
      <Form
        posts={posts}
        setPosts={setPosts}
        updateData={updateData}
        setUpdateData={setUpdateData}
      />
      {error ? (
        <p className="error-message">{error}</p>
      ) : !loading ? (
        <ol className="post-list">
          {posts.map((post) => {
            const { id, title, body } = post;
            return (
              <li key={id} className="post-item">
                <h2 className="post-title">Title: {title}</h2>
                <p className="post-description">
                  <strong>Description:</strong> {body}
                </p>
                <div className="btn-group">
                  <button
                    className="btn edit-btn"
                    onClick={() => handelOnUpdatePost(post)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn delete-btn"
                    onClick={() => handleDeletePost(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <div className="loader"></div>
      )}
    </section>
  );
};
