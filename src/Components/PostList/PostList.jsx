import React, { useState } from 'react'
import BlogPost from '../BlogPost/BlogPost'
import './PostList.css'
import NewForm from '../NewForm/NewForm'

const PostList = ({posts,setPosts,lastId,setLastId}) => {

    const [formDisplay,setFormDisplay]=useState(false)

    const addPost=(newOne)=>{
        const newId=lastId+1
        setPosts([...posts,{id:newId,...newOne,}])
        setLastId(newId)
    }

    const toggleForm =()=>{
        setFormDisplay(!formDisplay)
    }


  return (
    <div className='postList'>
        <div className='form-display'>{formDisplay && <NewForm addPost={addPost} formDisplay={formDisplay} setFormDisplay={setFormDisplay}></NewForm>}</div>
        <div className='postList-head'>
            <button className='add-button' onClick={()=>toggleForm()}>{formDisplay? "Cancel" : "Add"}</button>
            <h2>Blogs</h2>
        </div>
        <div className='grid-container'>
        {posts.map((item,index)=>{
            return <BlogPost key={index} id={item.id} title={item.title} author={item.author} date={item.date} content={item.content}></BlogPost>
        })}
        </div>
        
    </div>
  )
}

export default PostList
