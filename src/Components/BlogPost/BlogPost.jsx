import React, { useState } from "react";
import "./BlogPost.css";
import { Link } from "react-router-dom";

const BlogPost = ({
  id,
  title,
  author,
  content,
  date,
  editBlog,
  deleteModal,
  setDeleteModal,
  setBlogId,
}) => {
  const toggledelete = (id) => {
    setDeleteModal(!deleteModal);
    setBlogId(id);
  };
  return (
    <div className="showBlog">
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{date}</p>
      <div className="show-button">
        <Link
          to={{ pathname: `/display/${id}` }}
          state={{ id, title, author, content, date }}
        >
          <button className="read">Read Blog</button>
        </Link>
        <button onClick={() => toggledelete(id)} className="delete">
          Delete
        </button>
        {/* <button onClick={deleteBlog}>Delete</button> */}
        <button onClick={editBlog} className="edit">
          Edit
        </button>
      </div>
    </div>
  );
};
export default BlogPost;
