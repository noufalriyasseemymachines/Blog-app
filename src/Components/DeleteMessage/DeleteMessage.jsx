import React from "react";
import "./DeleteMessage.css";

const DeleteMessage = ({
  deleteModal,
  setDeleteModal,
  setPosts,
  blogId,
  posts,
}) => {
  const deleteCloseModal = () => {
    setDeleteModal(false);
  };

  const deleteBlog = (blogId) => {
    const afterDeleted = posts.filter((post) => post.id !== blogId);
    setPosts(afterDeleted);
    setDeleteModal(false);
  };

  return (
    <div className="delete-modal">
      <div className="delete-message">
        <h2>Are you sure</h2>
        <button className="delete-btn" onClick={() => deleteBlog(blogId)}>
          Delete
        </button>
        <button className="cancel-btn" onClick={deleteCloseModal}>
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteMessage;
