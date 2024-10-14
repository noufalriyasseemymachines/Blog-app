import React from 'react'
import './BlogPost.css'
import { Link } from 'react-router-dom'
import EditButton from '../EditButton/EditButton'
import DeleteButton from '../DeleteButton/DeleteButton'

const BlogPost = ({id,title,author,content,date}) => {

  return (
    <div className="showBlog">
               <h2>{title}</h2>
                <p>{author}</p>
                 <p>{date}</p>
                <div className="show-button">
                  <Link to={{pathname:`/display/${id}`}} state={{id,title,author,content,date}}>
                    <button>Read More</button>
                  </Link>
                  <EditButton id={id} title={title} author={author} content={content} date={date}></EditButton>
                  <DeleteButton></DeleteButton>

                </div>
      </div>
  )
}
export default BlogPost

