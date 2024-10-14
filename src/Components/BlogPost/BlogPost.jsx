import React from 'react'
import './BlogPost.css'
import { Link } from 'react-router-dom'

const BlogPost = ({id,title,author,content,date,deleteBlog,editBlog}) =>{

  return (
    <div className="showBlog">
               <h2>{title}</h2>
                <p>{author}</p>
                 <p>{date}</p>
                <div className="show-button">
                  <Link to={{pathname:`/display/${id}`}} state={{id,title,author,content,date}}>
                    <button>Read Blog</button>
                  </Link>
                  <button onClick={deleteBlog}>Delete</button>
                  <button onClick={editBlog}>Edit</button>
                </div>
      </div>
  )
}
export default BlogPost

